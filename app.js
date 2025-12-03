
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

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        CarRentalSystem rentalSystem = new CarRentalSystem();
        Scanner scanner = new Scanner(System.in);

        // 1. Add some initial cars
        rentalSystem.addCar(new Car("C001", "Toyota", "Camry", 50.0));
        rentalSystem.addCar(new Car("C002", "Honda", "CRV", 80.0));
        rentalSystem.addCar(new Car("C003", "Mercedes", "C-Class", 150.0));

        // --- Main Loop ---
        while (true) {
            System.out.println("\n== Car Rental System Menu ==");
            System.out.println("1. Rent a Car");
            System.out.println("2. Return a Car");
            System.out.println("3. Exit");
            System.out.print("Enter your choice: ");

            int choice = scanner.nextInt();
            scanner.nextLine(); // Consume newline

            if (choice == 1) {
                // --- Rent a Car ---
                rentalSystem.displayAvailableCars();
                System.out.print("Enter the car ID you want to rent: ");
                String carId = scanner.nextLine();

                Car selectedCar = findCarById(rentalSystem, carId);

                if (selectedCar != null && selectedCar.isAvailable()) {
                    System.out.print("Enter your name: ");
                    String customerName = scanner.nextLine();
                    System.out.print("Enter rental days: ");
                    int rentalDays = scanner.nextInt();
                    scanner.nextLine(); 

                    Customer newCustomer = new Customer("CUST" + System.currentTimeMillis(), customerName);
                    rentalSystem.rentCar(selectedCar, newCustomer, rentalDays);
                } else {
                    System.out.println("\nInvalid car selection or car is already rented.");
                }

            } else if (choice == 2) {
                // --- Return a Car ---
                System.out.print("Enter the car ID you are returning: ");
                String carId = scanner.nextLine();

                Car carToReturn = findCarById(rentalSystem, carId);

                if (carToReturn != null && !carToReturn.isAvailable()) {
                    rentalSystem.returnCar(carToReturn);
                } else {
                    System.out.println("\nInvalid car ID or car was not rented.");
                }
            } else if (choice == 3) {
                // --- Exit ---
                System.out.println("\nThank you for using the Car Rental System!");
                break;
            } else {
                System.out.println("\nInvalid choice. Please enter 1, 2, or 3.");
            }
        }

        scanner.close();
    }
    
    /**
     * Helper method to search for a Car object by its ID.
     */
    private static Car findCarById(CarRentalSystem system, String carId) {
        for (Car car : system.cars) {
            if (car.getCarId().equals(carId)) {
                return car;
            }
        }
        return null;
    }
}
