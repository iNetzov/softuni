#include <iostream>
#include <iomanip>
using  std::cin;
using  std::cout;
using std::setprecision;
using std::fixed;
using std::ios;
namespace constants {
	const double COURCE = 1.79549;
}
using namespace constants;

int main()
{
	double entryPrice = -1;
	cin >> entryPrice;
	double convertedPrice = entryPrice * COURCE;

	cout.setf(ios::fixed);
	
	cout << setprecision(2) << convertedPrice;
}