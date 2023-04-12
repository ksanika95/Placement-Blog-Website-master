import './PlacementStast.css'
import placement_per from '../images/placement_Percentage.png'
import highest_package from '../images/highest_Package.png'
import avg_sal from '../images/average_Salary.png'
import companies from '../images/companies_visited.png'

function PlacementStast (){
    return (
        <div>
            <h2>Placement Statistics</h2>
            <div className="about-tnp">
                <p>The Training and Placement Department of VIIT facilitates career guidance and training assistance for the students in order to achieve their career goals. The T&P cell identifies the current industry trends and facilitates the students to gain the latest skills and knowledge required by industry. </p>
                <br />
                <p> VIIT T&P cell plays a pivotal role in guiding the students to achieve their career goals. VIIT T&P cell conducts training activities with the help of industry experts, alumni and corporate trainers to prepare the students industry-ready. Audit Course (Aptitude, soft skill and technical training) conducted through T&P Cell for pre-final year students.</p> 
                <br />
                <p>VIIT T&P cell plays a pivotal role in guiding the students to achieve their career goals. VIIT T&P cell conducts training activities with the help of industry experts, alumni and corporate trainers to prepare the students industry-ready. Audit Course (Aptitude, soft skill and technical training) conducted through T&P Cell for pre-final year students. Aptitude training, tests and GD&PI sessions are conducted regularly to make students competent & to improve their performance in placement drives/Internships/Technical competitions and competitive exams. The Training Placement Officer with ATPO, Dept coordinator and student council from all the departments’ works together to run the T&P cell.</p>  
                <br />
                <p>Job oriented refreshers courses and special training programmes are regularly conducted. VIIT also arranges guest lectures by Industry experts, distinguished alumni for training students and faculty members. The VIIT T&P cell collaborates with the corporates and organizations across India to provide on-campus job opportunities to the students. It’s a brand value of Vishwakarma Institutes and great alumni network spread across the world, the leading organizations prefer to visit Vishwakarma Institutes for campus recruitment every year.</p> 
            </div>

            <div className="statistics">
                <p>Placement Percentage</p>
                <div className="percentage">
                    <img src={placement_per} alt="Placement Percentage" />
                    <h3>* placement process is still going on for batch</h3>
                </div>

                <p>Highest Package</p>
                <div className="percentage">
                    <img src={highest_package} alt="Highest Package" />
                    <h3>Highest Packages in last 4 Academic Year</h3>
                </div>

                <p>Average Salary</p>
                <div className="percentage">
                    <img src={avg_sal} alt="Placement Percentage" />
                    <h3>* placement process is still going on for batch</h3>
                </div>

                <p>No of Companies visited</p>
                <div className="percentage">
                    <img src={companies} alt="No of Companies visited" />
                    <h3>Continual increase in number of companies visiting Vishwakarma Institutes</h3>
                </div>

                
                
            </div>

        </div>
    );
}

export default PlacementStast;