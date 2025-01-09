//  Form use input data so we deal with keyboard events in form
// submit event - triggers on pressing enter or click submit btn
// by default submit process the post or get request on passed action and then refreshes page
// event.preventDefault()
//userName input
//textArea for feedback
//submit input btn

const myFeedbackForm = document.getElementById("myFeedbackForm");
const submitBtn = document.getElementById("submitBtn");
const userNameInput = document.getElementById("userNameInput");
const userEmailInput = document.getElementById("userEmailInput");
const feedbackComment = document.getElementById("feedbackCommentTextArea");

const formSubmit = (ev) => {
  ev.preventDefault();
  const usrNameInput = userNameInput.value;
  const feedBkComment = feedbackComment.value;
  const usrEmailInput = userEmailInput.value;
  //make regex to validate email input
  // /^[a-z]{1,9}.[a-z]{1,9}@[a-z]{3,6}.com$/ -> eg -> devrath.rana@gmail.com
  const emailPattern = /^[a-z]{1,9}.[a-z]{1,9}@[a-z]{3,6}.com$/;
  //make regex to validate username
  const userNamePattern = /^[a-zA-z]{1,8}[0-9]{1,3}$/;
  //make regex to validate feedback
  const feedbackPattern = /^[a-zA-z]{1,100}$/;

  //validate using test
  isValidEmail = emailPattern.test(usrEmailInput);
  isValidFeedback = feedbackPattern.test(feedBkComment);
  isValidUsername = userNamePattern.test(usrNameInput);

  console.log(
    "isValidEmail,isValidFeedback,isValidUsername",
    isValidEmail,
    isValidFeedback,
    isValidUsername
  );
};
myFeedbackForm.addEventListener("submit", formSubmit);
