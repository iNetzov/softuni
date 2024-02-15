#include <iostream>
using namespace std;
int main()
{
	double inputSpeed;
	string output;
	cin >> inputSpeed;
	if (inputSpeed <= 10)
	{
		output = "slow";
	}
	else if (inputSpeed > 10 && inputSpeed <= 50)
	{
		output = "average";
	}
	else if (inputSpeed > 50 && inputSpeed <= 150)
	{
		output = "fast";
	}
	else if (inputSpeed > 150 && inputSpeed <= 1000)
	{
		output = "ultra fast";
	}
	else 
	{
		output = "extremely fast";
	}
	cout << output;
}
