import { createContext, useContext, useReducer } from "react";

const QuizContext = createContext();

const initialState = {
  quizData1: [
    {
      questionSN: 1,
      questionHeading:
        "Which of the following apps is NOT included in Office 365?",
      isClicked: false,
      answerOptions: [
        { id: 1, answerText: "Word", isSelected: false, isCorrect: false },
        { id: 2, answerText: "Excel", isSelected: false, isCorrect: false },
        {
          id: 3,
          answerText: "PowerPoint",
          isSelected: false,
          isCorrect: false,
        },
        { id: 4, answerText: "Publisher", isSelected: false, isCorrect: true },
      ],
    },
    {
      questionSN: 2,
      questionHeading: "OneDrive lets you keep your files in ...",
      isClicked: false,
      answerOptions: [
        { id: 1, answerText: "the cloud", isSelected: false, isCorrect: true },
        {
          id: 2,
          answerText: "your flash drive",
          isSelected: false,
          isCorrect: false,
        },
        { id: 3, answerText: "your car", isSelected: false, isCorrect: false },
        {
          id: 4,
          answerText: "the basement",
          isSelected: false,
          isCorrect: false,
        },
      ],
    },

    {
      questionSN: 3,
      questionHeading: "One of the benefits of OneDrive is that ...",
      isClicked: false,
      answerOptions: [
        {
          id: 1,
          answerText: "It lets you access your files anywhere.",
          isSelected: false,
          isCorrect: true,
        },
        {
          id: 2,
          answerText: "It lets you share files with other users.",
          isSelected: false,
          isCorrect: false,
        },
        {
          id: 3,
          answerText: "It gives you more space than your student folder.",
          isSelected: false,
          isCorrect: false,
        },
        {
          id: 4,
          answerText: "All of the above",
          isSelected: false,
          isCorrect: false,
        },
      ],
    },

    {
      questionSN: 4,
      questionHeading:
        "what is the file format for creating Bulk users in Office 365?",
      isClicked: false,
      answerOptions: [
        {
          id: 1,
          answerText: "TSV",
          isSelected: false,
          isCorrect: false,
        },
        {
          id: 2,
          answerText: "CSV",
          isSelected: false,
          isCorrect: true,
        },
        {
          id: 3,
          answerText: "TXT",
          isSelected: false,
          isCorrect: false,
        },
        {
          id: 4,
          answerText: "PSD",
          isSelected: false,
          isCorrect: false,
        },
      ],
    },
    {
      questionSN: 5,
      questionHeading: "what does OWA stands for?",
      isClicked: false,
      answerOptions: [
        {
          id: 1,
          answerText: "out of windows application",
          isSelected: false,
          isCorrect: false,
        },
        {
          id: 2,
          answerText: "outside web application",
          isSelected: false,
          isCorrect: false,
        },
        {
          id: 3,
          answerText: "outlook web app ",
          isSelected: false,
          isCorrect: true,
        },
        {
          id: 4,
          answerText: "outlook wide app",
          isSelected: false,
          isCorrect: false,
        },
      ],
    },
  ],
};

function quizReducer(state, action) {
  switch (action.type) {
    case "CLICKED":
      const quizData1Copy = [...state.quizData1];
      const index = quizData1Copy.findIndex(
        (item) => item.questionSN === action.payload
      );

      const foundQuestion = { ...state.quizData1[index] };
      foundQuestion.isClicked = true;
      quizData1Copy.splice(index, 1, foundQuestion);
      return { ...state, quizData1: quizData1Copy };

    case "SELECTED":
      const quizData1Copy1 = [...state.quizData1];
      const index1 = quizData1Copy1.findIndex(
        (item) => item.questionSN === action.payload.questNo
      );

      const foundSelected = { ...state.quizData1[index1] };
      const optionIndex = foundSelected.answerOptions.findIndex(
        (item) => item.id === action.payload.optionNo
      );

      foundSelected.answerOptions[optionIndex].isSelected = true;

      quizData1Copy1.splice(index1, 1, foundSelected);

      return { ...state, quizData1: quizData1Copy1 };

    default:
      return state;
  }
}

const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

const useQuiz = () => useContext(QuizContext);
export { useQuiz, QuizProvider };
