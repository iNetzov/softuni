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
	int pointsLastD = -1;
	pointsLastD = points % 10;
	if (pointsLastD % 5 == 0) {
		extra += 2;
	}
	cout << extra << endl << points + extra;
}
