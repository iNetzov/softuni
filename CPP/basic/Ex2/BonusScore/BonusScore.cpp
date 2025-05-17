#include <iostream>
using namespace std;
int main()
{
	int points;
	double extra = 0;
	cin >> points;
	if (points <= 100) {
		extra += 5;
	}
	else if (points > 100 && points <= 1000) {
		extra += points * 0.20;
	}
	else if (points > 1000) {
		extra += points * 0.10;
	}

	if (points % 2 == 0) {
		extra += 1; 
	}
	if (points % 10 == 5) {
		extra += 2;
	}
	cout << extra << endl << points + extra;
}
