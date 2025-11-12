import React from 'react'
import './Gjob.css';
export default function Gjob(props) {
  return (
      <div className='gsearchjobmaindiv21'>
                <div className='gsearchjobstyle21'>
                    <h1 className='gsearchjobtitle21'>{props.title.split(" ").slice(0, 5).join(" ") + "..."}</h1>
                    <div className='gsearchlocation21'>
                        <p className='gsearchcompany21' >{props.company}</p>
                        <div style={{display:'flex',gap:"4px"}}>
                            <div><img style={{width:"16px",height:"16px",mixBlendMode:"multiply",borderRadius:"20px",marginTop:"2px"}}src="data:image/png;base64,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" alt="location" /></div>
                            <div><p className='gsearchplace21'>{props.place}</p></div>
                        </div>
                    </div>
                    <p className='gsearchdesc21'>{props.desc.split(" ").slice(0, 8).join(" ") + "..."}</p>
                    <h3 className='gsearchsalary21'>
                    
                    {/* //     props.minsal===null || props.maxsal===null ?  (<h3>Not avialable</h3>)
                    //     :
                    //    (<h3>₹ {props.minsal}k - {props.maxsal}k</h3>) */}
                              {props.minsal} {props.minsal!==null ? "k":null}  - {props.maxsal} {props.maxsal!==null ? "k":null}
                    
                    </h3>
                        {/* ₹ {props.minsal} - {props.maxsal}</h3> */}
                    <div className='gsearchapply21'>
                        <div style={{display:"flex",gap:"15px",marginTop:"13px"}}>
                            <div><button className='gsearchapplybutton21'>Fulltime</button></div>
                            <div><button className='gsearchapplybutton21'>Remote</button></div>
                        </div>
                        <div><button className='gsearchviewbutton21'>View now</button></div>
                    </div>
                </div>
            </div>
  )
}