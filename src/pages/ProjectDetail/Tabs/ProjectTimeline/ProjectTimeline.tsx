import React from "react";
import {
  Gantt,
  Task,
  // EventOption,
  // StylingOption,
  // ViewMode,
  // DisplayOption,
} from "gantt-task-react";
import "gantt-task-react/dist/index.css";
import Title from "antd/es/typography/Title";

const currentDate = new Date();

const ProjectTimeline = () => {
  const [tasks, setTasks] = React.useState<Task[]>([
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 7),
      name: "Market Analysis and Project Planning",
      id: "ProjectSample",
      progress: 100,
      type: "project",
      hideChildren: false,
      displayOrder: 1,
      // styles: {
      //   progressColor: "#1677ff",
      //   progressSelectedColor: "#1677ff",
      //   backgroundColor: "#aeb8c2",
      //   backgroundSelectedColor: "red",
      // },
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        2,
        12,
        28
      ),
      name: "Analyze market demand and consumer needs",
      id: "1SubTask1",
      progress: 100,
      type: "task",
      project: "ProjectSample",
      displayOrder: 2,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 3),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        6,
        12,
        28
      ),
      name: "Plan layout and infrastructure development",
      id: "1SubTask2",
      progress: 100,
      type: "task",
      project: "ProjectSample",
      displayOrder: 3,
      dependencies: ["1SubTask1"],
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 3),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 7),
      name: "Set project budget and timeline",
      id: "1SubTask3",
      progress: 100,
      type: "task",
      project: "ProjectSample",
      displayOrder: 4,
      dependencies: ["1SubTask1"],
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 14),
      name: "Land Acquisition",
      id: "ProjectSample2",
      progress: 100,
      type: "project",
      hideChildren: false,
      dependencies: ["ProjectSample"],
      displayOrder: 5,
      // styles: {
      //   progressColor: "#1677ff",
      //   progressSelectedColor: "#1677ff",
      //   backgroundColor: "#aeb8c2",
      //   backgroundSelectedColor: "red",
      // },
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9),
      name: "Search and select suitable land",
      id: "2SubTask1",
      progress: 100,
      type: "task",
      project: "ProjectSample2",
      displayOrder: 6,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 14),
      name: "Survey and assess land quality",
      id: "2SubTask2",
      progress: 100,
      type: "task",
      project: "ProjectSample2",
      displayOrder: 7,
      dependencies: ["2SubTask1"],
    },

    {
      name: "Project Design and Development",
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 28),
      id: "ProjectSample3",
      progress: 100,
      type: "project",
      hideChildren: false,
      dependencies: ["ProjectSample2"],
      displayOrder: 8,
      // styles: {
      //   progressColor: "#1677ff",
      //   progressSelectedColor: "#1677ff",
      //   backgroundColor: "#aeb8c2",
      //   backgroundSelectedColor: "red",
      // },
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 25),
      name: "Design house plans and infrastructure",
      id: "3SubTask1",
      progress: 100,
      type: "task",
      project: "ProjectSample3",
      displayOrder: 9,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 25),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 28),
      name: "Develop construction plans",
      id: "3SubTask2",
      progress: 45,
      type: "task",
      project: "ProjectSample3",
      displayOrder: 10,
    },

    {
      name: "Permitting and Approval",
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 29),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 4),
      id: "ProjectSample4",
      progress: currentDate.getMonth(),
      type: "project",
      hideChildren: false,
      dependencies: ["ProjectSample3","3SubTask2"],
      displayOrder: 11,
      styles: {
        // progressColor: "#1677ff",
        // progressSelectedColor: "#1677ff",
        // backgroundColor: "#aeb8c2",
        // backgroundSelectedColor: "red",
      },
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 29),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
      name: "Apply for permits and approvals",
      id: "4SubTask1",
      progress: currentDate.getMonth(),
      type: "task",
      project: "ProjectSample4",
      displayOrder: 12,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 4),
      name: "Wait for approvals",
      id: "4SubTask2",
      progress: 0,
      type: "task",
      project: "ProjectSample4",
      displayOrder: 13,
    },

    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 10),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 10),
      name: "Release",
      id: "Task 6",
      progress: currentDate.getMonth(),
      type: "milestone",
      dependencies: ["4SubTask2"],
      // project: "ProjectSample",
      displayOrder: 14,
    },

    // {
    //   start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
    //   end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4, 0, 0),
    //   name: "Research",
    //   id: "Task 1",
    //   progress: 25,
    //   dependencies: ["Task 0"],
    //   type: "task",
    //   project: "ProjectSample",
    //   displayOrder: 3,
    // },
    // {
    //   start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
    //   end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8, 0, 0),
    //   name: "Discussion with team",
    //   id: "Task 2",
    //   progress: 10,
    //   dependencies: ["Task 1"],
    //   type: "task",
    //   project: "ProjectSample",
    //   displayOrder: 4,
    // },
    // {
    //   start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
    //   end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9, 0, 0),
    //   name: "Developing",
    //   id: "Task 3",
    //   progress: 2,
    //   dependencies: ["Task 2"],
    //   type: "task",
    //   project: "ProjectSample",
    //   displayOrder: 5,
    // },
    // {
    //   start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
    //   end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
    //   name: "Review",
    //   id: "Task 4",
    //   type: "task",
    //   progress: 70,
    //   dependencies: ["Task 2"],
    //   project: "ProjectSample",
    //   displayOrder: 6,
    // },
    // {
    //   start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
    //   end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
    //   name: "Release",
    //   id: "Task 6",
    //   progress: currentDate.getMonth(),
    //   type: "milestone",
    //   dependencies: ["Task 4"],
    //   project: "ProjectSample",
    //   displayOrder: 7,
    // },
    // {
    //   start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 18),
    //   end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 19),
    //   name: "Party Time",
    //   id: "Task 9",
    //   progress: 0,
    //   isDisabled: true,
    //   type: "task",
    // },
  ]);

  const handleExpanderClick = (task: Task) => {
    setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    console.log("On expander click Id:" + task.id);
  };

  return (
    <>
      <Title level={3}>Project Timeline</Title>

      <Gantt
        tasks={tasks}
        barProgressSelectedColor="#1677ff"
        barProgressColor="#1677ff"
        arrowColor="#75757545"
        // columnWidth={200}
        // locale="tha"
        onExpanderClick={handleExpanderClick}
        // TaskListHeader={TaskListHeader}
      />
    </>
  );
};

// interface ITaskListHeader {
//   headerHeight: number;
//   rowWidth: string;
//   fontFamily: string;
//   fontSize: string;
// }

// const TaskListHeader: React.FC<ITaskListHeader> = () => {
//   return (
//     <Row style={{ width: "100%", marginTop: 26 }}>
//       <Col span={8}>Name:</Col>
//       <Col span={8}>From:</Col>
//       <Col span={8}>To:</Col>
//     </Row>

//   );
// };

export default ProjectTimeline;
