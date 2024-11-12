document.addEventListener("DOMContentLoaded", function () {
    const pushButton = document.querySelector('#push');
    const newTaskInput = document.querySelector('#newtask input');
    const tasksContainer = document.querySelector('#tasks');

    console.log("Push button:", pushButton);
    console.log("New task input:", newTaskInput);
    console.log("Tasks container:", tasksContainer);

    if (pushButton && newTaskInput && tasksContainer) {
        pushButton.onclick = function () {
            if (newTaskInput.value.length == 0) {
                alert("Please Enter a Task");
            } else {
                tasksContainer.innerHTML += `
                    <div class="task">
                        <span id="taskname">
                            ${newTaskInput.value}
                            <button class="delete">
                                del
                            </button>
                        </span>
                    </div>
                `;

                const currentTasks = document.querySelectorAll(".delete");
                currentTasks.forEach((task) => {
                    task.onclick = function () {
                        console.log("Delete button clicked", this);
                        this.parentNode.parentNode.remove();
                    }
                });

                newTaskInput.value = "";
            }
        };

        var tasks = document.querySelectorAll(".task");
        tasks.forEach((task) => {
            task.onclick = function () {
                this.classList.toggle('completed');
            };
        });
    } else {
        console.error("One or more elements are missing. Check HTML structure.");
    }
});
