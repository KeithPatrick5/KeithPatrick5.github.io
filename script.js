function showModal(content) {
  var modal = document.getElementById("modal"); // corrected ID
  var modalContent = document.getElementById("modal-text"); // corrected ID
  var span = document.getElementsByClassName("close")[0];

  modalContent.innerText = content;
  modal.style.display = "block";

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

// the rest of your JavaScript remains the same...

document.getElementById("phone").addEventListener("click", function () {
  showModal("Contact information: Available upon request");
});

document.getElementById("diploma").addEventListener("click", function () {
  showModal("Master's in Business Administration, Stanford Graduate School of Business, Stanford, CA, June 2021. Specialization in Finance and Marketing.");
});

document.getElementById("diploma2").addEventListener("click", function () {
  showModal(
    "Certified Public Accountant (CPA), California Board of Accountancy, March 2021."
  );
});

document.getElementById("globe").addEventListener("click", function () {
  showModal("Location: New York, NY");
});

document.getElementById("book1").addEventListener("click", function () {
  showModal(
    "Objective: A highly driven and detail-oriented finance professional seeking a position in investment banking to utilize skills in quantitative analysis, strategic risk management, and a proven track record of successful portfolio management."
  );
});

document.getElementById("book2").addEventListener("click", function () {
  showModal(
    "Work Experience: \nData Analyst at XYZ Tech Inc., New York, NY (March 2022-Present): Performed complex data analysis to drive business strategies, resulting in a 15% increase in quarterly sales.\nJunior Accountant at ABC Financial Services, Los Angeles, CA (July 2019-February 2022): Maintained and reconciled over 30 client accounts daily and assisted in the preparation of quarterly financial reports."
  );
});

document.getElementById("book3").addEventListener("click", function () {
  showModal(
    "Skills: \n- Proficient in Python, Java, and SQL\n- Expert in Microsoft Excel, Word, PowerPoint, and Access\n- Fluent in English and Spanish\n- Excellent communication and team leadership skills"
  );
});

document.getElementById("book4").addEventListener("click", function () {
  showModal(
    "Leadership Experience: President of Stanford Graduate Business Club, Stanford, CA (September 2020-June 2021): Organized events and managed a team of 10 to promote learning and networking opportunities for students interested in business."
  );
});

document.getElementById("book5").addEventListener("click", function () {
  showModal(
    "Awards: Recognized as 'Employee of the Year' at XYZ Tech Inc., 2022."
  );
});

document.getElementById("book6").addEventListener("click", function () {
  showModal(
    "Publications: Co-authored 'The Impact of AI on Financial Markets', published in the Journal of Financial Economics, May 2022."
  );
});