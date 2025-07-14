import React, { useCallback, useState } from "react";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { sendReport } from "../../api/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ReportDisplay.css";

pdfMake.vfs = pdfFonts.vfs;

const ReportDisplay = React.memo(
  ({ report, email, patientData, clearReport }) => {
    const [loading, setLoading] = useState(false);

    const generateAndSendPdf = useCallback(() => {
      if (!email || !email.includes("@")) {
        toast.warning("Email adresa nije validna.", {
          toastId: "invalid-email",
        });
        return;
      }

      const cleanedReport = report
        .replace(/Potpis lekara:.*(\r?\n)?/gi, "")
        .replace(/Potpis:.*(\r?\n)?/gi, "")
        .replace(/Dr\.?\s+[^\n]+(\r?\n)?/gi, "")
        .replace(/Prim\.?\s+[^\n]+(\r?\n)?/gi, "")
        .replace(/Prof\.?\s+[^\n]+(\r?\n)?/gi, "")
        .replace(/Specijalista.*(\r?\n)?/gi, "")
        .replace(/Lekar specijalista.*(\r?\n)?/gi, "")
        .replace(/Medicinski izveštaj:.*(\r?\n)?/gi, "")
        .replace(/Izveštaj:.*(\r?\n)?/gi, "")
        .replace(/Stomatološki:.*(\r?\n)?/gi, "")
        .replace(/Izveštaj o stomatološkom pregledu:.*(\r?\n)?/gi, "")
        .replace(/S poštovanjem,?(\r?\n)?/gi, "")
        .replace(/(Srdačan|Srdačno)?\s*Pozdrav,?(\r?\n)?/gi, "")
        .replace(/Lep pozdrav,?(\r?\n)?/gi, "")
        .replace(/Hvala na poverenju\.?(\r?\n)?/gi, "")
        .replace(/Datum pregleda:.*(\r?\n)?/gi, "")
        .replace(/Datum:.*(\r?\n)?/gi, "")
        .replace(/Vreme:.*(\r?\n)?/gi, "")
        .replace(/Datu[mn]\s+generisan[oa]:?.*(\r?\n)?/gi, "")
        .replace(/Napomena:.*(\r?\n)?/gi, "")
        .replace(/Web:.*(\r?\n)?/gi, "")
        .replace(/Ovaj izveštaj je generisan.*(\r?\n)?/gi, "")
        .replace(/Generisano pomoću.*(\r?\n)?/gi, "")
        .replace(/AI model.*(\r?\n)?/gi, "")
        .replace(/\n{2,}/g, "\n")
        .trim();
      const docDefinition = {
        content: [
          {
            text: "Alta Medica",
            style: "mainHeader",
          },
          {
            canvas: [
              {
                type: "line",
                x1: 0,
                y1: 0,
                x2: 515,
                y2: 0,
                lineWidth: 2,
                lineColor: "#005f9e",
              },
            ],
            margin: [0, 5, 0, 20],
          },
          {
            text: "Djordja Stanojevica 12, Beograd",
            style: "subHeader",
          },
          {
            style: "patientInfoBox",
            table: {
              widths: ["30%", "70%"],
              body: [
                ["Ime i prezime:", `${patientData.imeIPrezime || ""}`.trim()],
                ["Datum rođenja:", patientData.datumRodjenja || ""],
                ["Telefon:", patientData.telefon || ""],
                ["Email:", patientData.email || ""],
              ],
            },
            layout: {
              hLineWidth: () => 0,
              vLineWidth: () => 0,
              paddingTop: () => 6,
              paddingBottom: () => 6,
              paddingLeft: () => 4,
              paddingRight: () => 4,
            },
          },
          {
            text: "Izveštaj o pregledu",
            style: "sectionTitle",
            margin: [0, 30, 0, 15],
          },
          {
            text: cleanedReport,
            style: "reportContent",
          },
        ],
        styles: {
          mainHeader: {
            fontSize: 26,
            bold: true,
            alignment: "center",
            color: "#005f9e",
            margin: [0, 0, 0, 8],
            fontFamily: "Helvetica",
          },
          subHeader: {
            fontSize: 13,
            alignment: "center",
            italics: true,
            color: "#555",
            margin: [0, 0, 0, 25],
            fontFamily: "Helvetica",
          },
          sectionTitle: {
            fontSize: 16,
            bold: true,
            decoration: "underline",
            color: "#007acc",
            fontFamily: "Helvetica",
          },
          reportContent: {
            fontSize: 12,
            lineHeight: 1.7,
            fontFamily: "Times-Roman",
            color: "#222",
          },
          patientInfoBox: {
            margin: [0, 15, 0, 15],
            fontSize: 11,
            fillColor: "#e9f2fb",
            color: "#222",
            fontFamily: "Helvetica",
          },
          footerInfo: {
            fontSize: 10,
            italics: true,
            color: "#777",
            fontFamily: "Helvetica-Oblique",
          },
        },
        footer: function (currentPage, pageCount) {
          return {
            columns: [
              {
                text: `Datum: ${new Date().toLocaleDateString()}`,
                style: "footerInfo",
                alignment: "left",
              },
              {
                text: "Lekar specijalista: Marija Danilovic",
                style: "footerInfo",
                alignment: "right",
              },
            ],
            margin: [40, 0, 40, 25],
          };
        },
        pageMargins: [40, 40, 40, 70],
      };

      setLoading(true);

      pdfMake.createPdf(docDefinition).getBlob(async (blob) => {
        try {
          await sendReport(email, blob);
          toast.success("Izveštaj je uspešno poslat na mejl!", {
            toastId: "report-sent",
            className: "my-toast",
            progressClassName: "my-toast-progress",
          });
          clearReport();
        } catch (error) {
          console.error("Greška pri slanju mejla:", error);
          toast.error("Došlo je do greške prilikom slanja mejla.", {
            toastId: "report-error",
          });
        } finally {
          setLoading(false);
        }
      });
    }, [report, email, patientData, clearReport]);

    return (
      <>
        {report && (
          <div className="container-main">
            <div className="report-container">
              <h2>Generisani izveštaj</h2>
              <pre className="report-preview">{report}</pre>
              <button
                className="send-button"
                onClick={generateAndSendPdf}
                disabled={loading}
              >
                {loading ? "Šaljem..." : "Pošalji PDF na mejl"}
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
);

export default ReportDisplay;
