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


// Create the required functions here
/**
 * Returns an array of phone numbers in xxx xxx xxxx format
 * @param {string} input - A string of text with phone numbers
 * @returns {Array} An array of phoneNumbers
 */
function matchPhoneNumbers(input) {
	const numberArray = input.split("").filter(item=>/^[0-9]$/.test(item))
	const totalPhoneNumbers = numberArray.length/10;
	const phoneNumbersArray=[]
	let start=0;
	let end=9;
	for(let i=0;i<totalPhoneNumbers;i++){
		const phoneNumerReq=[]
		while(start<=end){
			phoneNumerReq.push(numberArray[start])
			start++;
		}
		start=end+1;
		end=end+10;
		phoneNumbersArray.push(phoneNumerReq.join(""))
	}
	return phoneNumbersArray;
}

/**
 * Replaces a valid url with "URL_REPLACED"
 * @param {string} input - A string of text with URLs
 * @returns {string}
 */
function replaceURLs(input) {
	return input.split(" ").filter(item=>/^http[s]{0,1}:[/]{2}[a-zA-Z.]{1,}.com$/.test(item))
}

/**
 * Returns a count of number of words available in the give string
 * @param {string} input - A string of text
 * @returns {number}
 */
function countWords(input) {
	return input.split(" ").filter(item=>/^[a-zA-Z]{1,}$/.test(item)).length
}

/**
 * Returns the original string with a single space between words
 * @param {string} input - A string of text with extra spaces
 * @returns {string} cleaned string without any extra spaces
 *
 */
function removeExtraSpaces(input) {
	return input.split(" ").filter(item=>/^[a-zA-Z.]{1,}$/.test(item)).join(" ")
}

// Sample Test Cases
console.log(
	matchPhoneNumbers(
		"My old phone number was 123 456 7890 but now you can reach me at 987 654 3210."
	)
);
console.log(
	matchPhoneNumbers("The store number is 555 321 9876, please call us.")
);

console.log(
	replaceURLs(
		"Find more info at https://example.com or contact us at http://help.example.com"
	)
);
console.log(
	replaceURLs(
		"The website http://mysite.com has been moved to https://newsite.com"
	)
);

console.log(countWords("This string has five words."));
console.log(countWords("Counting words is easy!"));

console.log(removeExtraSpaces("This   string    has   extra spaces."));
console.log(
	removeExtraSpaces(
		"     Too many    spaces    at the beginning and end.     "
	)
);
