'use strict';

// Create angular module. 
let ang = angular.module('UB2015', []);

/* Note that the main content for the quiz is
 * loaded from the config.js file and injected
 * here. */

/* Core quiz app which handles the quiz flow. */
ang.controller('QuizController', ($scope) => {
	$scope.cnt=0;
	$scope.choice=[];
	$scope.workshops;
	$scope.error;
	$scope.questions = globalQuestions;

	/* Proposes the workshop given the responses. */
	$scope.proposeWorkshops = () => {
		let suggestions = globalSuggestions;
		let combinations = globalCombinations;

		let sugg;
		// Runs over the different configuration settings
		// to find the appropriate workshop.
		for (let suggestion in combinations) {
			for (let i = 0; i < combinations[suggestion].criteria.length; i++) {
				let combs = combinations[suggestion].criteria[i];
				sugg = true;

				// Run over the answer combinations for the given
				// suggestion.
				for (let j = 0; j < combs.length; j++) {
					let multiple = false;

					// If the suggestion has a collection of workshop 
					// a, or workshop b, or ..., run over it.
					if (Array.isArray(combs[j])){
						for (let k = 0; k < combs[j].length; k++){
							if (combs[j][k] == $scope.choice[j]) {
								multiple = true;
							}
						}
						if(!multiple)
							sugg = false;

					// Otherwise check if our choice matches this suggestion.
					} else if ($scope.choice[j] != combs[j])
						sugg = false;
				}

				if (sugg) {
					sugg = suggestions[combinations[suggestion].suggestion];
					break;
				}
			}

			if(sugg)
				break;
		}

		// Return suggestion.
		if(sugg)
			return sugg;
		else
			return 0;
	};

	/* Helper utility that checks if we have found
	 * any workshops for the given asnwers. */
	$scope.check = (n) => {
		if (n == 0) return false;
		return true;
	}


	$scope.next = () => {
		// Make sure that the user have select an option for 
		// the given question.
		if (!$scope.choice[$scope.cnt] || $scope.choice[$scope.cnt] === undefined) {
			$scope.error = $scope.questions[$scope.cnt].error;
		} else {
			$scope.error='';
			$scope.cnt++;

			// If all questions have been answered, show result.
			if ($scope.cnt >= $scope.questions.length) {
				$scope.workshops=($scope.proposeWorkshops());
				$scope.map = (index) => {
					// Handle special case of full day workshop.
					if ($scope.workshops[1][0] == 'IKL' && index==0) return "Hele lørdag";
					if ($scope.workshops[1][0] == 'IKL') return "Søndag"
					
					// Set timings.
					let timings = {
						0: "Lørdag formiddag",
						1: "Lørdag eftermiddag",
						2: "Søndag"
					};
					return timings[index];
				}
			}
		}
	};
});