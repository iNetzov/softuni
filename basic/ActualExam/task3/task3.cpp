#include <iostream>
#include <string>
#include <iomanip>

using namespace std;

namespace pricesForSeasons{
	const double SUMMER_DISCOUNT = 15;
	const double WINTER_BONUS = 8;

	const double  SPRING_UNDER_FIVE_PEOPLE = 50;
	const double  SPRING_ABOVE_FIVE_PEOPLE = 48;
	
	
	const double  SUMMER_UNDER_FIVE_PEOPLE = 48.50;
	const double  SUMMER_ABOVE_FIVE_PEOPLE = 45;


	const double  AUTUMN_UNDER_FIVE_PEOPLE = 60;
	const double  AUTUMN_ABOVE_FIVE_PEOPLE = 49.5;
	

	const double  WINTER_UNDER_FIVE_PEOPLE = 86;
	const double  WINTER_ABOVE_FIVE_PEOPLE = 85;


}
using namespace pricesForSeasons;

int main() 
{
	int peopleCount;
	string season;
	cin >> peopleCount;
	cin >> season;

	double totalPrice = 0;
	
	if (season.compare("spring") == 0) {
		if (peopleCount <= 5) {
			totalPrice = peopleCount * SPRING_UNDER_FIVE_PEOPLE;
		}
		else {
			totalPrice = peopleCount * SPRING_ABOVE_FIVE_PEOPLE;
		}
	}
	else if (season.compare("summer") == 0) {
		if (peopleCount <= 5) {
			totalPrice = peopleCount * SUMMER_UNDER_FIVE_PEOPLE;
		}
		else {
			totalPrice = peopleCount * SUMMER_ABOVE_FIVE_PEOPLE;
		}
		totalPrice = totalPrice - (totalPrice * (SUMMER_DISCOUNT / 100));

	}
	else if (season.compare("autumn") == 0) {
		if (peopleCount <= 5) {
			totalPrice = peopleCount * AUTUMN_UNDER_FIVE_PEOPLE;
		}
		else {
			totalPrice = peopleCount * AUTUMN_ABOVE_FIVE_PEOPLE;
		}
	}
	else if (season.compare("winter") == 0) {
		if (peopleCount <= 5) {
			totalPrice = peopleCount * WINTER_UNDER_FIVE_PEOPLE;
		}
		else {
			totalPrice = peopleCount * WINTER_ABOVE_FIVE_PEOPLE;
		}
		totalPrice = totalPrice + (totalPrice * (WINTER_BONUS / 100));
	}
	cout.setf(ios::fixed);
	cout << setprecision(2) << totalPrice << " leva.";
}