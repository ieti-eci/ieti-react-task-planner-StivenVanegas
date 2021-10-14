function Task() {
    return(
        <div className="task">
            <form>
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Description"/>
                <input type="text" placeholder="Due Date"/>
                <input type="text" placeholder="Assigned"/>
                <input type="text" placeholder="Status"/>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Task;
