#include <iostream>
#include <iomanip>

namespace constants {
	const double PRICE_PUZZEL = 2.60;
	const double PRICE_DOLL = 3.00;
	const double PRICE_BEAR = 4.10;
	const double PRICE_MINION = 8.20;
	const double PRICE_TRUCK = 2.00;
	const double TAXES = 10;

}

using namespace std;
using namespace constants;

int main()
{
	double priceForVacation;
	int puzzelCount;
	int dollCount;
	int bearCount;
	int minionCount;
	int truckCount;
	double discount = 0;
	
	cin >> priceForVacation >> puzzelCount >> dollCount >> bearCount >> minionCount >> truckCount;
	int totalCount = puzzelCount + dollCount + bearCount + minionCount + truckCount;
	
	if (totalCount >= 50)
	{
		discount = 25;
	}
	double totalProfit = puzzelCount * PRICE_PUZZEL + dollCount * PRICE_DOLL + bearCount * PRICE_BEAR + minionCount * PRICE_MINION + truckCount * PRICE_TRUCK;
	totalProfit = totalProfit - totalProfit * (discount / 100);
	totalProfit = totalProfit - totalProfit * (TAXES / 100);

	cout.setf(ios::fixed);
	if (totalProfit - priceForVacation >= 0) {
		cout << "Yes! " <<setprecision(2) << totalProfit - priceForVacation << " lv left.";
	}
	else {
		cout << "Not enough money! " << setprecision(2) << priceForVacation - totalProfit << " lv needed." << endl;
	}
}
