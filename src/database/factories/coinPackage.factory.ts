import { CoinPackage } from '../../coin/models/coins.model';

export class CoinPackageFactory {
    static createMany(
        coinPackagesData: { coinAmount: bigint; price: number }[],
    ) {
        const coinPackages: CoinPackage[] = [];
        for (const data of coinPackagesData) {
            const coinPackage = new CoinPackage();
            coinPackage.coinAmount = data.coinAmount;
            coinPackage.price = data.price;
            coinPackages.push(coinPackage);
        }
        return coinPackages;
    }
}
