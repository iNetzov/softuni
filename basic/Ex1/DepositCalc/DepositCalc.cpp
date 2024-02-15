#include <iostream>
using std::cin;
using std::cout;

int main()
{
	int sumToDeposit = -1;
	int months = -1;
	double leans = -1;

	cin >> sumToDeposit >> months >> leans;
	
	double leansPerYear = sumToDeposit * (leans/100);
	double leansPerM = leansPerYear / 12;
	double totalSum = sumToDeposit + (months * leansPerM);

	cout << totalSum;
}
