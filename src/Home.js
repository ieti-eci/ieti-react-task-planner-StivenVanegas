import { Link } from "react-router-dom";
import { TaskItem } from "./components/TaskItem";

function Home() {
    const data = [
        {
            name: "Learn React"
        },
        {
            name: "Learn Hooks"
        },
        {
            name: "Deploy App"
        }
    ]
    return (
        <>
            <header className="home-header">
                <h1 className="home-h1">ToDo List</h1>
                <Link className="logout" to="/">
                    <span>Log out</span>
                </Link>
            </header>
            <div className="home">
                <ul className="ul-home">
                    {data.map((task) => {
                        return(
                            <TaskItem taskName={task.name}/>
                        );
                    })}
                </ul>
                <button>Add Task</button>
            </div>
        </>
    );
}

export default Home;