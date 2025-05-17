#include <iostream>
#include <cmath>
#include <iomanip>
using std::cin;
using std::cout;

namespace constants {
	const double PAPER_PRICE = 5.80;
	const double LETHER_PRICE = 7.20;
	const double GLUE_PRICE = 1.20;
}
using namespace constants;
using namespace std;

int main()
{
	int presentPaperCount;
	int presentLetherCount;
	double glueCount;
	double discout;
	cin >> presentPaperCount >> presentLetherCount >> glueCount >> discout;
	
	double totalPrice = presentPaperCount * PAPER_PRICE + presentLetherCount * LETHER_PRICE + glueCount * GLUE_PRICE;
	totalPrice = totalPrice - (totalPrice * (discout / 100));
	
	cout.setf(ios::fixed);
	cout << setprecision(3) << totalPrice;
}
