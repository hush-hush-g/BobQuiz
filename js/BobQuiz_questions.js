		var guysQuestions = [{prompt: "What is Bob's real age?", choices: ["Too old to care", 65, "Science can't measure back that far", 56, "Go ahead, ask him"], correctAnswer: 4},
		{prompt: "Bob's personality is best described as:", choices: ["Cuddly", "Loveable", "Huggable", "Snuggly", "Nuzzlebug"], correctAnswer: 4},
		{prompt: "What does Bob care about most?", choices: ["His family", "His son-in-law", "His quiet time", "His dog", "Long bike rides"], correctAnswer: 0},
		{prompt: "What is Bob's favorite inanimate object?", choices: ["Chapstick", "McDonald's fries", "Steins", "Grapes", "Bottle Caps"], correctAnswer: 2},
		{prompt: "What is Bob's favorite brand?", choices: ["Arc'teryx", "The North Face", "Patagonia", "Marmot", "Eddie Bauer"], correctAnswer: 3},
		{prompt: "If Bob were an internet Meme:", choices: ["I wish sarcasm was available as a font.", "Hide your kids, hide your wife...and hide your husband.", "I don't have a bucket list but my fucket list is a mile long.", "We ate riiibs wit dis dude!", "Ain't nobody got time for that!"], correctAnswer: 0},
		{prompt: "Which would embarrass Bob most?", choices: ["Sleeping on Brad's couch", "Coming in last in a race", "Showing affection to Brad", "Riding a beach cruiser bike", "Caught singing Beyonce in the shower"], correctAnswer: 1},
		{prompt: "In a past life Bob was:", choices: ["Rodeo clown", "Research test subject", "King of a small island", "Survivor winner", "Vegan"], correctAnswer: 1},
		{prompt: "How would Bob describe his soon to be son-in-law?", choices: ["Like, so cool", "Freaking loud", "\"Touchey\"", "Wuss", "Knowitall"], correctAnswer: 2},
		{prompt: "If Bob were an iced cream:", choices: ["Rocky Road", "Cherry Vanilla", "Mint Chocolate Chip", "Mouse Tracks", "Spumoni"], correctAnswer: 3},
		{prompt: "Bob could kill which of these without mercy?", choices: ["Fly", "Ant", "Spider", "Mosquito", "Brad's heart"], correctAnswer: 4},
		{prompt: "Who would Bob turn to for help?", choices: ["Diane", "Kristen", "Elise", "Brad", "Nobody, you're all worthless."], correctAnswer: 1},
		{prompt: "What could Bob comfortably leave out of his daily routine?", choices: ["Brushing", "Clean undies", "Socks", "Morning grumpiness", "Coffee"], correctAnswer: 2},
		{prompt: "Bob's favorite Mickey trick:", choices: ["Sit", "Roll-over", "Shake", "Stay", "Bite Brad"], correctAnswer: 3},
		{prompt: "If Bob were a dad quote:", choices: ["\“Any man can be a father, but it takes someone special to be a dad.\”", "\“Having children is like living in a frat house — nobody sleeps, everything’s broken, and there’s a lot of throwing up.\”", "\“My daughter got me a ‘World’s Best Dad’ mug. So we know she’s sarcastic.\”", "\“Fatherhood is great because you can ruin someone from scratch.\”", "\"Dad always thought laughter was the best medicine, which I guess is why several of us died of tuberculosis.\""], correctAnswer: 3},
		{prompt: "If Bob wrote a play with Mickey as the lead, Mickey's character would be:", choices: ["Prince Mickerson", "Lord Micktenstein", "Count Mickers", "Sir Mickey, Knight of the Hound Table", "King Fluffy Pants"], correctAnswer: 3},
		{prompt: "What does Bob check out about himself in the mirror?", choices: ["Tensed buns", "Smooth scalp", "Flexed abs", "Slender tri's", "Toned back"], correctAnswer: 0},
		{prompt: "What is Bob's spirit animal?", choices: ["Eagle", "Dolphin", "Llama", "Shark", "Bear"], correctAnswer: 4},
		{prompt: "If Bob is feeling witty he'd say:", choices: ["Life's disappointments are harder to take when you don't know any swear words.", "I wish more people were fluent in silence.", "The only mystery in life is that kamikaze pilots wore helmets.", "Not only is there no God, but try finding a plumber on Sunday. ", "A closed mouth gathers no feet."], correctAnswer: 1},
		{prompt: "Bob's favorite type of hug:", choices: ["One-armed hug", "Bear-hug", "Side-hug", "Stiff-hug", "Wiggle-hug"], correctAnswer: 0},
		{prompt: "On a daily basis Bob most identifies with:", choices: ["Buddy the Elf", "Robin Hood", "Prince Humperdinck", "Cosmo Kramer", "Michael Scott"], correctAnswer: 2},
		{prompt: "Bob's celeb crush:", choices: ["Bruce Willis", "Vin Diesel", "Jason Statham", "Howie Mandel", "Patrick Stewart"], correctAnswer: 1}];

		var cousinQuestions = [{prompt: "Who is the girls' favorite cousin?", choices: ["Steve", "Brad", "Susan", "Elise", "Fred"], correctAnswer: 3}, 
		{prompt: "What is their favorite book?", choices: ["1", "2", "3", "4", "5"], correctAnswer: 3}];
		var edRichQuestinos = [{prompt: "Who is the MVP of Campbell & Co. Jewelers?", choices: ["Brad", "Ed", "Cody", "Elise", "Rich"], correctAnswer: 2},
		{prompt: "Question 2", choices: ["1", "2", "3", "4", "5"], correctAnswer: 3}];
		var royaltyQuestions = [{prompt: "Who is the princess?", choices: ["Kristen", "Diane", "Elise", "Brad", "Fred"], correctAnswer: 3},
		{prompt: "Question 2?", choices: ["1", "2", "3", "4", "5"], correctAnswer: 3}];

		// User object
		function User(firstName, lastName, email, password, topScores) {
			this.firstName = firstName;
			this.lastName = lastName;
			this.email = email;
			this.password = password;
			this.topScores = [];
			//Add a top score and sort
			this.updateTopScores = function(score) {
				this.topScores.push(score);
				this.topScores.sort();
				this.topScores.reverse();
			}
		}

		// Quotes
		function Quotes() {
			var quotes = [];
			//Add a new quote
			this.addQuote = function(name, source, quote) {
				var newQuote = {
					name: name,
					source: source,
					quote: quote,
					add: function() {
						quotes.push(this);
					}
				};
				newQuote.add();
			}
			//Get random quote
			this.pullQuote = function() {
				var index = Math.floor((Math.random() * quotes.length));
				return quotes[index];
			}
		}

		// Quiz Object
		function Quiz(name, ref, questions) {
			this.name = name;
			this.questions = questions;
			this.toPresent = false;
			var ref = ref;
			var correctAnswers = setCorrectAnswers(questions);
			var answers = [];
			var questionNumber = 0;
			var score = 0;
			//get ref
			this.getRef = function() {
				return ref;
			}
			//Set correct answers
			function setCorrectAnswers(myQuestions) {
				var corAns = new Array();
				var i = 0;
				for (i; i < myQuestions.length; i++) {
					corAns.push(myQuestions[i].correctAnswer);
				}
				return corAns;
			}
			this.getQuestion = function() {
				if (this.questions[questionNumber]) {return this.questions[questionNumber];}
			}
			//Get current correct answer
			this.getCorrectAnswer = function() {
				return correctAnswers[questionNumber];
			}
			//Get current question number
			this.getCurrentQuestion = function() {
				return questionNumber;
			}
			//Increase current question
			this.incrQuestionNumber = function() {
				if (questionNumber < answers.length) {
					questionNumber++;
				}
			}
			//Decrease current question
			this.decQuestionNumber = function() {
				if (questionNumber > 0) {
					questionNumber--;
				}
			}
			//Add new answer
			this.setAnswer = function(ans) {
				answers[questionNumber] = ans;
			}
			//Get answer 
			this.getAnswer = function() {
				return answers[questionNumber];
			}
			this.numberAnswered = function() {
				return answers.length;
			}
			//To present the score or not
			this.presentScore = function() {
				this.toPresent = true;
			}
			//Get score
			this.getScore = function() {
				var myScore = 0;
				var i = 0;
				for (i; i < this.questions.length - 1; i++) {
					if (answers[i] == correctAnswers[i]) {
						myScore++;
					}
				}
				score = Math.round(100 * myScore / (this.questions.length - 1));
				return score;
			}
			//Progress
			this.progress = function() {
				return Math.round(100 * answers.length / this.questions.length);
			}
			//Reset Quiz
			this.reset = function() {
				this.toPresent = false;
				answers = [];
				questionNumber = 0;
				score = 0;
			}
		}

		// Quiz Applet Object
		function QuizApplet() {
			var quizes = [];
			var activeQuiz = null;
			var activeTab = null;
			//Add new quiz to applet
			this.addQuiz = function(quiz) {
				quizes.push(quiz);
			}
			//Get Quizes
			this.getQuizes = function() {
				return quizes;
			}
			//Get the active tab
			this.getActiveTab = function() {
				return activeTab;
			}
			//Set active tab and quiz if pass arg is found in stored quizes
			this.setActiveTab = function(tab) {
				quizes.forEach(function(quiz) {
					if (quiz.getRef() === tab) {
						activeTab = tab;
						setActiveQuiz(quiz);
					}
				});
			}
			//Display current quiz
			this.getActiveQuiz = function() {
				return activeQuiz;
			}
			//Set current quiz
			var setActiveQuiz = function(quiz) {
				activeQuiz = quiz;
			}
			//...enumerate the quiz names and check for compatability then display the current one
		}

		// Quotes
		var quotesObj = new Quotes();
		quotesObj.addQuote("Annoyed Bob", "The Kids Came Home", "Mickey Bite!");
		quotesObj.addQuote("Annoyed Bob", "The Kids Came Home", "Sick 'em Mickey!");
		quotesObj.addQuote("Annoyed Bob", "The Kids Came Home", "Go for the groin Mickey!");
		quotesObj.addQuote("Annoyed Bob", "The Kids Came Home", "No mercy Mickey!");
		quotesObj.addQuote("Ski Bob", "Brad's First Ski Trip", "Guess you're not as much of a pussy as we thought you were...*throws Brad new mittens*...*refuses hug*");
		quotesObj.addQuote("Diane", "Her Life Experiences", "That was Amazing!");
		quotesObj.addQuote("Racing Bob", "Steelman Triathalon", "You know her last boyfriend was faster.");
		quotesObj.addQuote("Celebratory Bob", "Christmas", "Don't hug me. I'm not a hugger...");
		quotesObj.addQuote("Bob", "Ski Lift Proposal", "Which daughter?...Fine....You owe me a Llama.");
		quotesObj.addQuote("Weeknight Bob", "Hoping The Kids Leave", "Why does this guy keep hugging me?");
		quotesObj.addQuote("Mikayla", "Taking the World by Storm", "...*quietly smiling*...");
		quotesObj.addQuote("Mikayla", "Lacrosse Picture", "I look like I'm being strangled");
		quotesObj.addQuote("Kaitlyn", "Farm Politics", "I fell off Bernie.");
		quotesObj.addQuote("Kaitlyn", "Stratton Antics", "That's lit.");
		quotesObj.addQuote("Diane", "Dinnertime", "Oh my god this is so lite and fluffy; it's delicious!");
		quotesObj.addQuote("Diane", "Diane's Outlook on Life", "It's a BEAUTIFUL day!");
		quotesObj.addQuote("Diane", "Life", "What an amazing day!");
		quotesObj.addQuote("Diane", "On Living", "Could life get any better?");
		quotesObj.addQuote("Mickey", "No Touching", "Woof Wooof Woof!");
		quotesObj.addQuote("Mickey", "Life is Good", "*Growing fluffy pantaloons*");
		quotesObj.addQuote("Entire Family", "This is How We Talk", "*text*...*gif*..*emoji*...*gif* *gif* *gif*...*emoji*");

		// Our Quizes
		var guyQuiz = new Quiz("Bobbo & the Guys", "#bob", guysQuestions);
		var cousinQuiz = new Quiz("John, Corinna & the Girls", "#johnCorinna", cousinQuestions);
		var edRichQuiz = new Quiz("Ed & Rich", "#edRich", edRichQuestinos);
		var royaltyQuiz = new Quiz("The Royalty", "#eliseDianeKristen", royaltyQuestions);

		// Quiz Applet initialization
		var quizApplet = new QuizApplet();
		quizApplet.addQuiz(guyQuiz);
		quizApplet.addQuiz(cousinQuiz);
		quizApplet.addQuiz(edRichQuiz);
		quizApplet.addQuiz(royaltyQuiz);
		quizApplet.setActiveTab("#bob");


