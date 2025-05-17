#include <iostream>
#include <iomanip>

using namespace std;

int main()
{
	int DAYS_LEFT = 5;
	double moneyFromParentsDaily;
	double moneyFromWork;
	double moneyLostForConsumables;
	double priceForPresent;

	cin >> moneyFromParentsDaily >> moneyFromWork >> moneyLostForConsumables >> priceForPresent;
	

	double totalMoney = moneyFromParentsDaily * DAYS_LEFT + moneyFromWork * DAYS_LEFT - moneyLostForConsumables;

	cout.setf(ios::fixed);

	if (totalMoney >= priceForPresent) {
		cout << "Profit: " <<setprecision(2)<< totalMoney << " BGN, the gift has been purchased.";
	}
	else {

		cout << "Insufficient money: " << setprecision(2) << abs(totalMoney - priceForPresent) << " BGN.";
	}

}
