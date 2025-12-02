
cars = {
    1: {"model": "Toyota", "rate": 40, "available": True},
    2: {"model": "Honda", "rate": 50, "available": True},
    3: {"model": "BMW", "rate": 120, "available": True},
}

print("Available Cars:")
for cid, car in cars.items():
    print(f"{cid}. {car['model']} - ${car['rate']}/day")

car_id = int(input("\nEnter car ID to rent: "))
days = int(input("Enter number of days: "))

if cars[car_id]["available"]:
    total = cars[car_id]["rate"] * days
    cars[car_id]["available"] = False
    print(f"\nYou rented a {cars[car_id]['model']} for {days} days.")
    print(f"Total cost: ${total}")
else:
    print("Car not available!")
public class Car {
    private String carId;
    private String brand;
    private String model;
    private double basePricePerDay;
    private boolean isAvailable;

    public Car(String carId, String brand, String model, double basePricePerDay) {
        this.carId = carId;
        this.brand = brand;
        this.model = model;
        this.basePricePerDay = basePricePerDay;
        this.isAvailable = true; // Cars are available by default
    }

    // --- Getters ---
    public String getCarId() {
        return carId;
    }

    public String getBrand() {
        return brand;
    }

    public String getModel() {
        return model;
    }

    public double getBasePricePerDay() {
        return basePricePerDay;
    }

    public boolean isAvailable() {
        return isAvailable;
    }

  
    public void setAvailable(boolean isAvailable) {
        this.isAvailable = isAvailable;
    }

   
    public double calculatePrice(int rentalDays) {
        return basePricePerDay * rentalDays;
    }

    @Override
    public String toString() {
        return carId + " - " + brand + " " + model + " (Price: $" + basePricePerDay + " per day)";
    }
}
public class Customer {
    private String customerId;
    private String name;

    public Customer(String customerId, String name) {
        this.customerId = customerId;
        this.name = name;
    }

    // --- Getters ---
    public String getCustomerId() {
        return customerId;
    }

    public String getName() {
        return name;
    }

    @Override
    public String toString() {
        return "Customer ID: " + customerId + ", Name: " + name;
    }
}

public class Rental {
    private Car car;
    private Customer customer;
    private int days;

    public Rental(Car car, Customer customer, int days) {
        this.car = car;
        this.customer = customer;
        this.days = days;
    }

    // --- Getters ---
    public Car getCar() {
        return car;
    }

    public Customer getCustomer() {
        return customer;
    }

    public int getDays() {
        return days;
    }
}
