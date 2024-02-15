#include <iostream>
using namespace std;
int main()
{
	int hours;
	int minutes;
	const int BONUS_MINUTES = 15;
	cin >> hours >> minutes;

	if (minutes + BONUS_MINUTES > 59) {
		hours++;
		minutes = minutes + BONUS_MINUTES;
		minutes = minutes - 60;
	}
	else {
		minutes = minutes + BONUS_MINUTES;
	}
	if (hours > 23) {
		hours = hours - 24;
	}
	if (minutes < 10) {
		cout << hours << ":0" << minutes;
	}
	else {
		cout << hours << ":" << minutes;
	}
}
