#include <iostream>
using namespace std;
int main()
{
	int playerOne;
	int playerTwo;
	int playerThree;
	cin >> playerOne >> playerTwo >> playerThree;
	int totalSec = playerOne + playerTwo + playerThree;
	int minutes = totalSec / 60;
	int seconds = totalSec % 60;

	if (totalSec < 10) 
	{
		cout << minutes << ":0" << seconds << endl;
	}
	else 
	{
		cout << minutes << ":" << seconds << endl;
	}
}
