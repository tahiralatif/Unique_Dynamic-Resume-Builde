document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form') as HTMLFormElement;
    const resume = document.getElementById('resume') as HTMLElement;
    const shareableLink = document.getElementById('shareable-link') as HTMLAnchorElement;
    
    form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    
    (document.getElementById('resume-name') as HTMLElement).innerText = name;
    (document.getElementById('resume-email') as HTMLElement).innerText = email;
    (document.getElementById('resume-education') as HTMLElement).innerText = education;
    (document.getElementById('resume-work-experience') as HTMLElement).innerText = workExperience;
    (document.getElementById('resume-skills') as HTMLElement).innerText = skills;
    
    resume.style.display = 'block';
    
    const uniqueURL = `${username}.vercel.app/resume`;
    shareableLink.href = `https://${uniqueURL}`;
    shareableLink.innerText = uniqueURL;
    });
    
    const downloadButton = document.getElementById('download-pdf') as HTMLButtonElement;
    downloadButton.addEventListener('click', () => {
    const element = document.getElementById('resume') as HTMLElement;
    const opt = {
    margin: 1,
    filename: 'resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    
    });
    });