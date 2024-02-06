#include <iostream>
using std::cin;
using std::cout;
using std::endl;

namespace constants {
	const double PRICE_PER_SQUARE_M = 7.61;
	const double DISSCOUNT = 18;
}
using namespace constants;


int main()
{
	double squareMetersToCover = -1;
	
	cin >> squareMetersToCover;

	double totalPrice = squareMetersToCover * PRICE_PER_SQUARE_M; 
	double discoundPrice = ((totalPrice) / 100) * 18;
	totalPrice = totalPrice - discoundPrice;

	cout << "The final price is : " << totalPrice<<" lv." << endl << "The discount is : "<< discoundPrice << " lv.";

}
