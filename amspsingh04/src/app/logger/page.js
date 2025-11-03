'use client';
// We don't need useState or useEffect anymore for a static list
// import { useState, useEffect } from 'react'; 
import styles from './page.module.css'; // must match file name exactly

// 1. Static data based on your list
// NOTE: The 'url' assumes these files are in your /public directory
const files = [
  {
    id: 1,
    name: 'Biomedical_Image_Segmentation_of_Breast_Cancer_WSIs.pdf',
    url: '/Biomedical_Image_Segmentation_of_Breast_Cancer_WSIs.pdf',
  },
  {
    id: 2,
    name: 'HIS_Expt.pdf',
    url: '/HIS_Expt.pdf',
  },
  {
    id: 3,
    name: 'Review_Biomedical_Image_Segmentation.pdf',
    url: '/Review_Biomedical_Image_Segmentation.pdf',
  },
  {
    id: 4,
    name: 'ShouryaPratapSingh_CV_research.pdf',
    url: '/ShouryaPratapSingh_CV_research.pdf',
  },
  {
    id: 5,
    name: 'Shourya_BTech_PJT1_Report.pdf',
    url: '/Shourya_BTech_PJT1_Report.pdf',
  },
];


export default function LoggerPage() {
  // 2. No data fetching logic is needed
  // const [entries, setEntries] = useState([]);
  // useEffect(() => { ... }, []);

  return (
    <div className={styles.container}>
      {/* 3. Changed title */}
      <h1 className={styles.title}>Document List</h1>

      <table className={styles.table}>
        <thead>
          <tr>
            {/* 4. Updated table headers */}
            <th>File Name</th>
            <th>Description</th>
            <th>Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {/* 5. Map over the new 'files' array */}
          {files.map(file => (
            <tr key={file.id}>
              <td>
                {/* 6. This is the link you requested */}
                <a href={file.url} target="_blank" rel="noopener noreferrer">
                  {file.name}
                </a>
              </td>
              <td>{file.description}</td>
              <td>{file.updated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
