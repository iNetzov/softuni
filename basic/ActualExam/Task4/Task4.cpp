#include <iostream>
#include <iomanip>

namespace constants {
	const double  RATING_2 = 0;
	const double  RATING_3 = 50;
	const double  RATING_4 = 70;
	const double  RATING_5 = 85;
	const double  RATING_6 = 100;
}
using namespace constants;
using namespace std;
int main()
{
	int counter;

	cin >> counter;
	double totalSales = 0;
	double avgRating = 0;
	
	for (int i = 0; i < counter; i++)
	{
		int input;
		cin >> input;
		int rating = input % 10;
		int sales = input / 10;
		double actualSales = 0;
		
		if (rating == 2) 
		{
		actualSales = sales * (RATING_2 / 100);
		}
		else if (rating == 3) {
			actualSales = sales * (RATING_3 / 100);
		}
		else if (rating == 4) {
			actualSales = sales * (RATING_4 / 100);
		}
		else if (rating == 5) {
			actualSales = sales * (RATING_5 / 100);
		}
		else if (rating == 6) {
			actualSales = sales * (RATING_6 / 100);
		}
		totalSales += actualSales;
		avgRating += rating;
	}
	avgRating = avgRating / counter;

	cout.setf(ios::fixed);
	cout << setprecision(2) << totalSales << endl << setprecision(2) << avgRating;

}
