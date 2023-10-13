
import './Experience.css';

function Experience() {
  return (
    <section className="experience" id="experience">
      <h2>&lt; Experience &gt;</h2>
      <table>
        <thead>
          <tr>
            <th>Experience</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>School Leader</td>
            <td>
              As a School Leader, I demonstrated strong leadership and organizational skills by effectively managing school activities and fostering a positive learning environment. I played a key role in promoting student engagement and academic excellence while working collaboratively with faculty and staff to enhance the overall educational experience.
            </td>
          </tr>
          <tr>
            <td><a className='text-decoration-none text-dark' href="https://drive.google.com/file/d/1IBYOXZkhk4MCn_DEadNfdtiNiRUR__y4/view?usp=sharing">Cryptography and Network Security<br /> (Click to View!)</a></td>
            <td>
              NPTEL Certification - Elite with Silver Medal. Completing a course in Cryptography and Network Security has equipped me with a robust skill set to secure sensitive information and networks against cyber threats, reinforcing my skills with essential cybersecurity expertise.
            </td>
          </tr>
          <tr>
            <td><a className='text-decoration-none text-dark' href="https://drive.google.com/file/d/11-NzLW4cthNqcMoSKy-Je3NgU1FZ3S42/view?usp=drive_link">Research Internship at IIIT Kottayam<br /> (Click to View!)</a></td>
            <td>
              My research internship in "Malware Analysis using Deep Learning and Explainable AI" significantly enhanced my abilities by equipping me with advanced skills in cyber threat analysis and artificial intelligence. This experience allowed me to develop innovative solutions for identifying and mitigating malware, making me a valuable asset in the field of cybersecurity.
            </td>
          </tr>
          <tr>
            <td><a className='text-decoration-none text-dark' href="https://github.com/pavanjoe">React Projects<br /> (Click to View!)</a></td>
            <td>
              Made simple websites such as Calculator, Colour Picker, Age Picker as well as many HTML, CSS and JS tasks, all of which is available to view on my Github Page
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Experience;
