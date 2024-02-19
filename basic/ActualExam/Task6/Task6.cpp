#include <iostream>

using namespace std;

int main()
{
	int input;
	cin >> input;

	int thirdDigit = 0;
	int secondDigit = 0;
	int firstDigit = 0;
	
	thirdDigit = input % 10;
	 secondDigit = (input / 10) % 10;
	 firstDigit = input / 100;

	for (int i = 1; i <= thirdDigit; i++)
	{
		for (int j = 1; j <= secondDigit; j++)
		{
			for (int n = 1; n <= firstDigit; n++)
			{
				cout << i << " * " << j  << " * " << n << " = " << i   * j   * n  << ";" << endl;
			}
		}
	}
}