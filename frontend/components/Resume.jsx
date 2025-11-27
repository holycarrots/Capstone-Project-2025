import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

// PDF & DOCX
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { Document as DocxDocument, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType } from "docx";
import { saveAs } from "file-saver";

import "./resume.css";
import Res from "./Res";
import { MdDelete } from "react-icons/md";
import { VscClearAll } from "react-icons/vsc";
import { IoIosAddCircle } from "react-icons/io";
import TextField from "@mui/material/TextField";

export default function Createresume() {
  const { register, unregister, handleSubmit } = useForm();

  const [formData, setFormData] = useState({
    personalDetails: { "full-name": "", email: "", "Github-link": "", linkedin: "" },
    experiences: [{}],
    educations: [{}],
    projects: [{}],
    skills: ""
  });

  const [finalData, setFinalData] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState("pdf"); // pdf | word | both

  // uploaded image path (tool will convert to URL if needed)
  const uploadedImagePath = "/mnt/data/41f666dc-c773-4173-88de-083b91c97bd1.png";

  // add/remove
  const addExperience = () => setFormData(s => ({ ...s, experiences: [...s.experiences, {}] }));
  const addEducation = () => setFormData(s => ({ ...s, educations: [...s.educations, {}] }));
  const addProject = () => setFormData(s => ({ ...s, projects: [...s.projects, {}] }));

  const removeExperience = (index) => { try { unregister(`experiences[${index}]`); } catch{}; setFormData(s => ({ ...s, experiences: s.experiences.filter((_, i) => i !== index) })); };
  const removeEducation = (index) => { try { unregister(`educations[${index}]`); } catch{}; setFormData(s => ({ ...s, educations: s.educations.filter((_, i) => i !== index) })); };
  const removeProject = (index) => { try { unregister(`projects[${index}]`); } catch{}; setFormData(s => ({ ...s, projects: s.projects.filter((_, i) => i !== index) })); };

  // helper to break text to fit width
  function pdfBreakText(text, font, size, maxWidth) {
    if (!text) return [""];
    const words = text.split(" ");
    const lines = [];
    let cur = "";
    for (const w of words) {
      const trial = cur ? cur + " " + w : w;
      const wWidth = font.widthOfTextAtSize(trial, size);
      if (wWidth > maxWidth) {
        if (cur) lines.push(cur);
        cur = w;
      } else cur = trial;
    }
    if (cur) lines.push(cur);
    return lines;
  }

  // ---------------- PDF generation using pdf-lib ----------------
  const generatePDF = async (data) => {
    if (!data) return;
    const pdfDoc = await PDFDocument.create();
    let page = pdfDoc.addPage([595.28, 841.89]); // A4
    const { width, height } = page.getSize();

    // embed fonts
    const times = await pdfDoc.embedFont(StandardFonts.TimesRoman);
    const timesBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);

    const leftMargin = 48;
    let y = height - 60;

    // Name centered
    const name = data.personalDetails["full-name"] || "";
    const nameSize = 20;
    const nameW = timesBold.widthOfTextAtSize(name, nameSize);
    page.drawText(name, { x: (width - nameW) / 2, y, size: nameSize, font: timesBold });
    y -= 30;

    // Header TABLE: two rows, two columns (left/right)
    const contactSize = 10;
    // Row 1
    const leftRow1 = data.personalDetails.linkedin ? `LinkedIn: ${data.personalDetails.linkedin}` : "";
    const rightRow1 = data.personalDetails.email ? `Email: ${data.personalDetails.email}` : "";
    // Row 2
    const leftRow2 = data.personalDetails["Github-link"] ? `GitHub: ${data.personalDetails["Github-link"]}` : "";
    // mobile may not exist in your form; try personalDetails.mobile if present
    const rightRow2 = data.personalDetails.mobile || "";

    // Draw row1 left
    page.drawText(leftRow1, { x: leftMargin, y, size: contactSize, font: times });
    // Draw row1 right (right-aligned)
    const rightRow1W = times.widthOfTextAtSize(rightRow1, contactSize);
    page.drawText(rightRow1, { x: width - leftMargin - rightRow1W, y, size: contactSize, font: times });
    y -= 16;

    // Draw row2 left
    page.drawText(leftRow2, { x: leftMargin, y, size: contactSize, font: times });
    // Draw row2 right
    const rightRow2W = times.widthOfTextAtSize(rightRow2, contactSize);
    page.drawText(rightRow2, { x: width - leftMargin - rightRow2W, y, size: contactSize, font: times });
    y -= 22;

    // Section helper
    const drawSectionHeader = (title) => {
      page.drawText(title.toUpperCase(), { x: leftMargin, y, size: 12, font: timesBold });
      y -= 14;
      page.drawLine({ start: { x: leftMargin, y }, end: { x: width - leftMargin, y }, thickness: 1, color: rgb(0,0,0) });
      y -= 18;
    };

    // SKILLS
    if (data.skills) {
      drawSectionHeader("SKILLS");
      // split by comma or newline
      const skills = data.skills.split("\n").flatMap(l => l.split(",")).map(s => s.trim()).filter(Boolean);
      if (skills.length === 0) {
        const lines = pdfBreakText(data.skills, times, 11, width - leftMargin*2);
        lines.forEach(line => { page.drawText(line, { x: leftMargin, y, size: 11, font: times }); y -= 14; });
      } else {
        // group into a line like: Languages: ..., Frameworks: ...
        // since form is single textbox, show comma-joined skills as one line to mimic sample
        const combined = skills.join(", ");
        const lines = pdfBreakText(combined, times, 11, width - leftMargin*2);
        lines.forEach(line => { page.drawText(line, { x: leftMargin, y, size: 11, font: times }); y -= 14; });
      }
      y -= 6;
    }

    // PROJECTS
    if (data.projects && data.projects.length) {
      drawSectionHeader("PROJECTS");
      for (const pr of data.projects) {
        // Title left, dates right
        const ptitle = pr["project-name"] || "";
        const start = pr["start-date"] || "";
        const end = pr["end-date"] || "";
        const dateStr = (start || end) ? `${start}${start && end ? " - " : ""}${end}` : "";

        // draw title (bold)
        page.drawText(ptitle, { x: leftMargin, y, size: 12, font: timesBold });
        if (dateStr) {
          const dW = times.widthOfTextAtSize(dateStr, 11);
          page.drawText(dateStr, { x: width - leftMargin - dW, y, size: 11, font: times });
        }
        y -= 16;

        // description bullets (split by newlines or sentences)
        const desc = pr["project-description"] || "";
        let bullets = desc.split("\n").map(s=>s.trim()).filter(Boolean);
        if (bullets.length <= 1) {
          // fallback: split by '.' into sentences
          bullets = desc.split(".").map(s=>s.trim()).filter(Boolean);
        }
        bullets.forEach(b => {
          const wrapped = pdfBreakText(b, times, 11, width - leftMargin*2 - 12);
          page.drawText("• " + wrapped[0], { x: leftMargin, y, size: 11, font: times });
          y -= 14;
          for (let i = 1; i < wrapped.length; i++) {
            page.drawText(wrapped[i], { x: leftMargin + 12, y, size: 11, font: times });
            y -= 14;
          }
        });

        // Tech line if present (we attempt to read project-tech or leave empty)
        const tech = pr["project-tech"] || "";
        if (tech) {
          page.drawText("Tech: " + tech, { x: leftMargin + 6, y, size: 11, font: timesBold });
          y -= 16;
        }
        y -= 6;
        if (y < 120) { page = pdfDoc.addPage([width, height]); y = height - 60; }
      }
    }

    // EDUCATION
    if (data.educations && data.educations.length) {
      drawSectionHeader("EDUCATION");
      for (const edu of data.educations) {
        // bullet + school left, location/dates right
        page.drawText("•", { x: leftMargin, y, size: 12, font: timesBold });
        const school = edu["school-name"] || "";
        page.drawText(school, { x: leftMargin + 10, y, size: 11, font: timesBold });
        const eduRight = `${edu.location || ""}${edu.location && (edu["start-date"]||edu["end-date"]) ? " | " : ""}${edu["start-date"] || ""}${edu["start-date"] && edu["end-date"] ? " - " : ""}${edu["end-date"] || ""}`;
        const wRight = times.widthOfTextAtSize(eduRight, 10);
        page.drawText(eduRight, { x: width - leftMargin - wRight, y, size: 10, font: times });
        y -= 14;
        if (edu.degree) {
          page.drawText(edu.degree, { x: leftMargin + 10, y, size: 11, font: times });
          y -= 14;
        }
        if (edu.cgpa) {
          page.drawText(`CGPA: ${edu.cgpa}`, { x: leftMargin + 10, y, size: 11, font: timesBold });
          y -= 14;
        }
        y -= 6;
      }
    }

    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    saveAs(blob, "Resume.pdf");
  };

  // ---------------- DOCX generation (docx) ----------------
  const generateWord = async (data) => {
    if (!data) return;

    // header table: 2 rows x 2 cols
    const left1 = data.personalDetails.linkedin || "";
    const right1 = data.personalDetails.email || "";
    const left2 = data.personalDetails["Github-link"] || "";
    const right2 = data.personalDetails.mobile || "";

    const headerTable = new Table({
      rows: [
        new TableRow({
          children: [
            new TableCell({ width: { size: 50, type: WidthType.PERCENTAGE }, children: [new Paragraph(left1)] }),
            new TableCell({ width: { size: 50, type: WidthType.PERCENTAGE }, children: [new Paragraph({ children: [ new TextRun(right1) ], alignment: "right" })] })
          ]
        }),
        new TableRow({
          children: [
            new TableCell({ children: [new Paragraph(left2)] }),
            new TableCell({ children: [new Paragraph({ children: [ new TextRun(right2) ], alignment: "right" })] })
          ]
        })
      ],
      width: { size: 100, type: WidthType.PERCENTAGE }
    });

    // build children array similar to screenshot:
    const children = [];

    // name centered
    children.push(new Paragraph({ children: [ new TextRun({ text: data.personalDetails["full-name"] || "", bold: true, size: 32 }) ], alignment: "center" }));
    children.push(new Paragraph({ text: "" }));

    // add header table
    children.push(headerTable);

    // skills header + text
    children.push(new Paragraph({ children: [ new TextRun({ text: "SKILLS", bold: true }) ] }));
    children.push(new Paragraph({ text: data.skills || "" }));
    children.push(new Paragraph({ text: "" }));

    // projects
    if (data.projects && data.projects.length) {
      children.push(new Paragraph({ children: [ new TextRun({ text: "PROJECTS", bold: true }) ] }));
      for (const pr of data.projects) {
        children.push(new Paragraph({ children: [ new TextRun({ text: pr["project-name"] || "", bold: true }) ] }));
        const bullets = (pr["project-description"] || "").split("\n").map(s=>s.trim()).filter(Boolean);
        if (bullets.length <= 1) {
          const sentences = (pr["project-description"] || "").split(".").map(s=>s.trim()).filter(Boolean);
          sentences.forEach(s => children.push(new Paragraph({ text: "• " + s })));
        } else {
          bullets.forEach(b => children.push(new Paragraph({ text: "• " + b })));
        }
        if (pr["project-tech"]) children.push(new Paragraph({ children: [ new TextRun({ text: "Tech: ", bold: true }), new TextRun({ text: pr["project-tech"] }) ] }));
        children.push(new Paragraph({ text: "" }));
      }
    }

    // education
    if (data.educations && data.educations.length) {
      children.push(new Paragraph({ children: [ new TextRun({ text: "EDUCATION", bold: true }) ] }));
      for (const edu of data.educations) {
        children.push(new Paragraph({ text: "• " + (edu["school-name"] || "") }));
        if (edu.degree) children.push(new Paragraph({ text: edu.degree }));
        if (edu.cgpa) children.push(new Paragraph({ text: `CGPA: ${edu.cgpa}` }));
        children.push(new Paragraph({ text: "" }));
      }
    }

    const doc = new DocxDocument({ sections: [{ children }] });
    const blob = await Packer.toBlob(doc);
    saveAs(blob, "Resume.docx");
  };

  // ---------------- SUBMIT ----------------
  const onSubmit = (data) => {
    setFinalData(data);
    setSubmitted(true);
    // keep previous behavior: auto-download PDF on submit
    generatePDF(data);
  };

  const handleFormatChange = (e) => setSelectedFormat(e.target.value);
  const handleDownloadSelection = () => {
    if (!finalData) return;
    if (selectedFormat === "pdf") generatePDF(finalData);
    else if (selectedFormat === "word") generateWord(finalData);
    else {
      generatePDF(finalData);
      setTimeout(() => generateWord(finalData), 600);
    }
  };

  return (
    <>
      {submitted ? (
        <div>
          <Res data={finalData} />
          <div className="download-panel">
            <label className="choose-label">Choose Format:</label>
            <select value={selectedFormat} onChange={handleFormatChange} className="format-select">
              <option value="pdf">PDF</option>
              <option value="word">Word (.docx)</option>
              <option value="both">Both</option>
            </select>

            <div className="download-buttons">
              <button className="sub223" onClick={() => generatePDF(finalData)}>Download PDF</button>
              <button className="sub223" onClick={() => generateWord(finalData)}>Download Word (.docx)</button>
              <button className="sub223" onClick={handleDownloadSelection}>Download Selected</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="container223" style={{ backgroundColor: "whitesmoke" }}>
          <form className="form223" style={{ backgroundColor: "white" }} onSubmit={handleSubmit(onSubmit)}>
            <div className="personal-details223">
              <h3>Personal Details</h3>

              <label>Full Name</label>
              <TextField variant="filled" className="input223" {...register("personalDetails.full-name", { required: true })} />

              <label>Email</label>
              <TextField variant="filled" className="input223" type="email" {...register("personalDetails.email", { required: true })} />

              <label>GitHub</label>
              <TextField variant="filled" className="input223" {...register("personalDetails.Github-link")} />

              <label>LinkedIn</label>
              <TextField variant="filled" className="input223" {...register("personalDetails.linkedin", { required: true })} />

              <button type="button" className="add223" onClick={() => setFormData({ ...formData, personalDetails: { "full-name": "", email: "", "Github-link": "", linkedin: "" } })}><VscClearAll /></button>
            </div>

            <h3>Experience</h3>
            {formData.experiences.map((_, index) => (
              <div key={index} className="Experience223">
                <label>Company</label>
                <TextField variant="filled" className="input223" {...register(`experiences[${index}].company-name`)} />
                <label>Job Title</label>
                <TextField variant="filled" className="input223" {...register(`experiences[${index}].job-title`)} />
                <label>Start Date</label>
                <TextField variant="filled" type="date" className="input223" {...register(`experiences[${index}].start-date`)} />
                <label>End Date</label>
                <TextField variant="filled" type="date" className="input223" {...register(`experiences[${index}].end-date`)} />
                <div className="btn-row">
                  <button type="button" className="del223" onClick={() => removeExperience(index)} title="Remove this experience"><MdDelete /></button>
                  <button type="button" className="add223" onClick={addExperience} title="Add new experience"><IoIosAddCircle /></button>
                </div>
              </div>
            ))}

            <h3>Education</h3>
            {formData.educations.map((_, index) => (
              <div key={index} className="Education223">
                <label>School</label>
                <TextField variant="filled" className="input223" {...register(`educations[${index}].school-name`, { required: true })} />
                <label>Degree</label>
                <TextField variant="filled" className="input223" {...register(`educations[${index}].degree`, { required: true })} />
                <label>Start Date</label>
                <TextField variant="filled" type="date" className="input223" {...register(`educations[${index}].start-date`, { required: true })} />
                <label>End Date</label>
                <TextField variant="filled" type="date" className="input223" {...register(`educations[${index}].end-date`, { required: true })} />
                <div className="btn-row">
                  <button type="button" className="del223" onClick={() => removeEducation(index)} title="Remove this education"><MdDelete /></button>
                  <button type="button" className="add223" onClick={addEducation} title="Add new education"><IoIosAddCircle /></button>
                </div>
              </div>
            ))}

            <h3>Projects</h3>
            {formData.projects.map((_, index) => (
              <div key={index} className="Projects223">
                <label>Project Name</label>
                <TextField variant="filled" className="input223" {...register(`projects[${index}].project-name`, { required: true })} />
                <label>Description</label>
                <TextField variant="filled" className="input223" {...register(`projects[${index}].project-description`, { required: true })} />
                <label>Start Date</label>
                <TextField variant="filled" type="date" className="input223" {...register(`projects[${index}].start-date`, { required: true })} />
                <label>End Date</label>
                <TextField variant="filled" type="date" className="input223" {...register(`projects[${index}].end-date`, { required: true })} />
                <div className="btn-row">
                  <button type="button" className="del223" onClick={() => removeProject(index)} title="Remove this project"><MdDelete /></button>
                  <button type="button" className="add223" onClick={addProject} title="Add new project"><IoIosAddCircle /></button>
                </div>
              </div>
            ))}

            <h3>Skills</h3>
            <TextField variant="filled" className="input223" placeholder="HTML, CSS, JS" {...register("skills", { required: true })} />

            <div style={{ textAlign: "center" }}>
              <input type="submit" value="Submit" className="sub223" style={{ width: "15rem", marginTop: "20px", border: "2px solid #f58840" }} />
            </div>
          </form>
        </div>
      )}
    </>
  );
}
