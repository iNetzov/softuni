#include <iostream>
#include <string>
using namespace std;

int main()
{
	string bestP;
	int bestGoals = 0;

	while (true) {

		string name;
		int  goals;
		cin >> name;

		if (name.compare("END") == 0) {
			break;
		}
		cin >> goals;

		if (goals > bestGoals) {
			bestGoals = goals;
			bestP = name;
		}
		if (goals >= 10) {
			break;
		}
	}
	cout << bestP << " is the best player!" << endl;

	if (bestGoals >= 3) {
		cout << "He has scored " << bestGoals << " goals and made a hat-trick !!!";
	}
	else {
		cout << "He has scored " << bestGoals << " goals.";
	}
}
