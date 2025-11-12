import React, { useEffect} from "react";

import "./Pagination.css";

const Pagination = ({
    totalPosts,
    postsPerPage,
    setCurrentPage,
    currentPage,
}) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

  
    //button style
    useEffect(() => {
        const btnList = document.querySelectorAll('.butt03');
    
        btnList.forEach(btnEl => {
          btnEl.addEventListener('click', () => {
            const specialElement = document.querySelector('.special');
            if (specialElement) {
              specialElement.classList.remove('special');
            }
            btnEl.classList.add('special');
          });
        });
    
        // Cleanup function
        return () => {
          btnList.forEach(btnEl => {
            btnEl.removeEventListener('click', () => {
              const specialElement = document.querySelector('.special');
              if (specialElement) {
                specialElement.classList.remove('special');
              }
              btnEl.classList.add('special');
            });
          });
        };
      });

  
    return (
        <div className='pagination'>
            {pages.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        // className={page == currentPage ? "fill" : "pagination button"}>
                        className="butt03">
                        {page}
                    </button>
                );
            })}
        </div>
    );
};

export default Pagination;