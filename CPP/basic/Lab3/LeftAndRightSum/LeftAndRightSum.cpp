#include <iostream>
using namespace std;
int main()
{
	int count;
	cin >> count;
	int sumOne = 0;
	int sumTwo = 0;

	for (int i = 0; i < count; i++)
	{
		int number;
		cin >> number;
		sumOne += number;
	}
	for (int i = 0; i < count; i++)
	{
		int number;
		cin >> number;
		sumTwo += number;
	}
	if (sumOne == sumTwo) {
		cout << "Yes, sum = " << sumOne;
		return 0;
	}
	cout << "No, diff = " << abs(sumTwo - sumOne);
}
