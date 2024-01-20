def best(array):
    biggest = max(array, key=lambda x: x)
    max_indices = [index for index, value in enumerate(array) if value == biggest]

    max_profit = 0
    day_to_buy = 0

    for index in max_indices:
        for i in range(index, 0, -1):
            current_profit = biggest - array[i - 1]
            if current_profit >= max_profit:
                max_profit = current_profit
                day_to_buy = i - 1

    arr1 = array[:day_to_buy]
    arr2 = array[max_indices[-1] + 1:]

    return max_profit, arr1, arr2

# Example usage:
prices = [0, 2, 6, 5, 5, 9, 1, 2]
total_best_profit, arr1, arr2 = best(prices)
print("Best Profit for Entire Array:", total_best_profit)

if arr1:
    second_best_left = best(arr1)[0]
else:
    second_best_left = 0

if arr2:
    second_best_right = best(arr2)[0]
else:
    second_best_right = 0

second_best_profit = max(second_best_left, second_best_right)
print("Second Best Profit for Entire Array:", second_best_profit)
