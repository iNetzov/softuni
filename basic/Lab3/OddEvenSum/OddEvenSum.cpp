#include <iostream>
using namespace std;

int main()
{
	int oddSum = 0;
	int evenSum = 0;
	int count = 0;


	cin >> count;
	for (int i = 0; i < count; i++)
	{
		int number;
		cin >> number;
		if (i % 2 == 0) {
			evenSum += number;
		}
		else {
			oddSum += number;
		}
	}
	if (oddSum == evenSum)
	{
		cout << "Yes"<<endl<<"Sum = " << oddSum;
	}
	else {
		cout << "No" << endl << "Diff = " << abs(oddSum - evenSum);
	}
}