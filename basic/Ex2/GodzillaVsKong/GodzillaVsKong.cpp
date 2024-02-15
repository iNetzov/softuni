#include <iostream>
#include <math.h>
#include <iomanip>

using namespace std;
int main()
{
	const double DIRECTOR_COST = 10;
	int staff;
	double budget;
	double staffEqupmentPrice;
	double discont = 0;
	cin >> budget >> staff>> staffEqupmentPrice;

	budget = budget - budget * (DIRECTOR_COST / 100);
	double staffTaxes = staff * staffEqupmentPrice;

	if (staff >= 150) {
		discont = 10;
	}
	staffTaxes = staffTaxes - staffTaxes * (discont / 100);
	cout.setf(ios::fixed);
	if (budget < staffTaxes) {
		cout << "Not enough money!" << endl;
		cout << "Wingard needs " << setprecision(2) << staffTaxes - budget << " leva more." << endl;
	} else {
		cout << "Action!" << endl;
		cout << "Wingard starts filming with " << setprecision(2) << budget - staffTaxes << " leva left." << endl;

	}
}
