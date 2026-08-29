import { jsPDF } from 'jspdf';
import {
  PORTFOLIO_OWNER,
  EDUCATION_LIST,
  CERTIFICATIONS_LIST,
  FEATURED_PROJECTS,
  SKILL_CATEGORIES,
  BUSINESS_EXPERIENCE,
} from '../data/portfolioData';

export const generateResumePdf = () => {
  try {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 14;
    const contentWidth = pageWidth - margin * 2;
    let y = margin;

    const checkPageBreak = (neededHeight: number) => {
      if (y + neededHeight > pageHeight - margin - 8) {
        doc.addPage();
        y = margin + 4;
      }
    };

    // Header Background Accent Bar
    doc.setFillColor(15, 23, 42); // Slate 900
    doc.rect(0, 0, pageWidth, 28, 'F');

    // Header Name
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.setTextColor(255, 255, 255);
    doc.text(PORTFOLIO_OWNER.name.toUpperCase(), margin, 12);

    // Title / Subtitle
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(56, 189, 248); // Sky 400
    doc.text(PORTFOLIO_OWNER.title, margin, 18);

    // Header Contact Info Strip
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(203, 213, 225); // Slate 300
    const contactText = `${PORTFOLIO_OWNER.location}  |  ${PORTFOLIO_OWNER.email}  |  ${PORTFOLIO_OWNER.phone}`;
    doc.text(contactText, margin, 24);

    y = 34;

    // Helper to draw section header
    const drawSectionHeader = (title: string) => {
      checkPageBreak(12);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(15, 23, 42); // Slate 900
      doc.text(title.toUpperCase(), margin, y);

      // Underline accent
      doc.setDrawColor(6, 182, 212); // Cyan 500
      doc.setLineWidth(0.6);
      doc.line(margin, y + 1.5, margin + 40, y + 1.5);

      doc.setDrawColor(226, 232, 240); // Slate 200
      doc.setLineWidth(0.2);
      doc.line(margin + 40, y + 1.5, pageWidth - margin, y + 1.5);

      y += 6.5;
    };

    // 1. PROFESSIONAL SUMMARY
    drawSectionHeader('Professional Summary');
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(51, 65, 85); // Slate 700
    const summaryLines = doc.splitTextToSize(
      `${PORTFOLIO_OWNER.heroBio} Holds a Bachelor of Business Administration (BBA) with dedicated focus on Exploratory Data Analysis (EDA), KPI tracking, structured data cleaning, and intuitive executive dashboards translating analytical findings into measurable commercial value.`,
      contentWidth
    );
    doc.text(summaryLines, margin, y);
    y += summaryLines.length * 4 + 3;

    // 2. TECHNICAL SKILLS & TOOLS
    drawSectionHeader('Technical Skills & Tools');
    doc.setFontSize(8.5);
    SKILL_CATEGORIES.forEach((cat) => {
      checkPageBreak(6);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(15, 23, 42);
      doc.text(`${cat.category}:`, margin, y);

      const titleWidth = doc.getTextWidth(`${cat.category}: `);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(51, 65, 85);
      const skillText = cat.skills.join(', ');
      const skillLines = doc.splitTextToSize(skillText, contentWidth - titleWidth);
      doc.text(skillLines, margin + titleWidth, y);
      y += skillLines.length * 3.8 + 1.5;
    });
    y += 2;

    // 3. KEY ANALYTICS PROJECTS
    drawSectionHeader('Key Analytics Projects');
    FEATURED_PROJECTS.forEach((project) => {
      checkPageBreak(24);
      // Project Title & Tagline
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(15, 23, 42);
      doc.text(project.title, margin, y);
      y += 4.2;

      // Technologies
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(71, 85, 105);
      const toolsText = `Technologies: ${project.technologies.join(', ')}`;
      doc.text(toolsText, margin, y);
      y += 4;

      // Summary
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.2);
      doc.setTextColor(51, 65, 85);
      const descLines = doc.splitTextToSize(project.shortDescription, contentWidth - 4);
      doc.text(descLines, margin + 2, y);
      y += descLines.length * 3.8 + 1.5;

      // Business Takeaways
      if (project.businessTakeaways && project.businessTakeaways.length > 0) {
        project.businessTakeaways.slice(0, 2).forEach((takeaway) => {
          checkPageBreak(5);
          doc.setTextColor(15, 23, 42);
          doc.text('•', margin + 2, y);
          const outcomeLines = doc.splitTextToSize(takeaway, contentWidth - 8);
          doc.setTextColor(71, 85, 105);
          doc.text(outcomeLines, margin + 6, y);
          y += outcomeLines.length * 3.6 + 1;
        });
      }
      y += 2.5;
    });

    // 4. BUSINESS & PRACTICAL EXPERIENCE
    drawSectionHeader('Applied Project Experience');
    checkPageBreak(20);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(15, 23, 42);
    doc.text(`${BUSINESS_EXPERIENCE.projectTitle} - ${BUSINESS_EXPERIENCE.role}`, margin, y);
    y += 4;

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8.2);
    doc.setTextColor(8, 145, 178);
    doc.text(BUSINESS_EXPERIENCE.tagline, margin, y);
    y += 4;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.2);
    doc.setTextColor(51, 65, 85);
    const expDescLines = doc.splitTextToSize(BUSINESS_EXPERIENCE.description, contentWidth - 4);
    doc.text(expDescLines, margin + 2, y);
    y += expDescLines.length * 3.6 + 2;

    // 5. EDUCATION
    drawSectionHeader('Education');
    EDUCATION_LIST.forEach((edu) => {
      checkPageBreak(14);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(15, 23, 42);
      doc.text(edu.degree, margin, y);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(100, 116, 139);
      doc.text(edu.period, pageWidth - margin - doc.getTextWidth(edu.period), y);
      y += 4;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.2);
      doc.setTextColor(71, 85, 105);
      doc.text(edu.institution, margin, y);
      y += 4.5;
    });

    // 6. CERTIFICATIONS
    drawSectionHeader('Professional Certifications');
    CERTIFICATIONS_LIST.forEach((cert) => {
      checkPageBreak(10);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(15, 23, 42);
      doc.text(`• ${cert.title}`, margin, y);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.8);
      doc.setTextColor(8, 145, 178);
      const issuerText = cert.issueDate ? `${cert.issuer} (${cert.issueDate})` : cert.issuer;
      doc.text(issuerText, pageWidth - margin - doc.getTextWidth(issuerText), y);
      y += 4.5;
    });

    // Footer on all pages
    const totalPages = doc.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.5);
      doc.setTextColor(148, 163, 184); // Slate 400
      doc.text(
        `${PORTFOLIO_OWNER.name} - Resume  |  Page ${i} of ${totalPages}`,
        pageWidth / 2,
        pageHeight - 6,
        { align: 'center' }
      );
    }

    doc.save('Danish_Wani_Resume.pdf');
  } catch (err) {
    console.error('Error generating PDF resume:', err);
    window.print();
  }
};
