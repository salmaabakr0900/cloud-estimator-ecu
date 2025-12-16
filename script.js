// Realistic pricing simulation (Price per unit per month)
const pricingData = {
    aws: { cpu: 24.50, ram: 10.20, storage: 0.10 },
    azure: { cpu: 26.00, ram: 9.50, storage: 0.12 },
    gcp: { cpu: 22.80, ram: 11.00, storage: 0.08 }
};

document.getElementById('calcBtn').addEventListener('click', () => {
    // Get values from inputs
    const provider = document.getElementById('provider').value;
    const cpu = parseFloat(document.getElementById('cpu').value) || 0;
    const ram = parseFloat(document.getElementById('ram').value) || 0;
    const storage = parseFloat(document.getElementById('storage').value) || 0;

    // Calculate total
    const rates = pricingData[provider];
    const total = (cpu * rates.cpu) + (ram * rates.ram) + (storage * rates.storage);

    // Display result with animation effect
    const priceElement = document.getElementById('totalPrice');
    priceElement.innerText = `$${total.toFixed(2)}`;
    
    console.log(`Calculation for ${provider}: CPU(${cpu}), RAM(${ram}), Storage(${storage}) = $${total}`);
});