document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resume-form');
    var resume = document.getElementById('resume');
    var shareableLink = document.getElementById('shareable-link');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var username = document.getElementById('username').value;
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var education = document.getElementById('education').value;
        var workExperience = document.getElementById('work-experience').value;
        var skills = document.getElementById('skills').value;
        document.getElementById('resume-name').innerText = name;
        document.getElementById('resume-email').innerText = email;
        document.getElementById('resume-education').innerText = education;
        document.getElementById('resume-work-experience').innerText = workExperience;
        document.getElementById('resume-skills').innerText = skills;
        resume.style.display = 'block';
        var uniqueURL = "".concat(username, ".vercel.app/resume");
        shareableLink.href = "https://".concat(uniqueURL);
        shareableLink.innerText = uniqueURL;
    });
    var downloadButton = document.getElementById('download-pdf');
    downloadButton.addEventListener('click', function () {
        var element = document.getElementById('resume');
        var opt = {
            margin: 1,
            filename: 'resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
    });
});
