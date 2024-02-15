#include <iostream>
namespace consumables {
	const double PEN_PRICE = 5.80;
	const double MARKER_PRICE = 7.20;
	const double COMPOUND_PER_LITER = 1.20;
}
using std::cin;
using std::cout;
using namespace consumables;
int main()
{
	int penCount;
	int markerCount;
	int compoundLiters;
	double discount;
	cin >> penCount >> markerCount >> compoundLiters >> discount;

	double totalPriceBeforeDiscount = penCount * PEN_PRICE + markerCount * MARKER_PRICE + compoundLiters * COMPOUND_PER_LITER;
	double totalPriceAfterDiscount = totalPriceBeforeDiscount - (totalPriceBeforeDiscount * (discount / 100));
	
	cout << totalPriceAfterDiscount;
}
