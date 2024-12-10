/**
"use client";
 
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

const PdfViewer = ({ fileUrl }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  // Callback for when the PDF is successfully loaded
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1); // Reset to first page
  };

  const goToPrevPage = () => setPageNumber((prev) => Math.max(prev - 1, 1));
  const goToNextPage = () => setPageNumber((prev) => Math.min(prev + 1, numPages));

  return (
    <div className="pdf-container">
      <Document file={fileUrl} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <div className="navigation">
        <button onClick={goToPrevPage} disabled={pageNumber === 1}>
          Previous
        </button>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <button onClick={goToNextPage} disabled={pageNumber === numPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PdfViewer;
*/