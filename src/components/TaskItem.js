import { Link } from "react-router-dom";

export const TaskItem = ({taskName}) => {

    return(
        <Link to="/task">
            <li className="li-task">
                
                <span className="span-task">{taskName}</span>
                
            </li>
        </Link>
    );
};