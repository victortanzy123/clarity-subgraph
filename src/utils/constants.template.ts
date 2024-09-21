import { BigDecimal, BigInt, Bytes } from '@graphprotocol/graph-ts';

export const ZERO_BYTES = new Bytes(0);

export const ZERO_BI = BigInt.fromString('0');
export const ONE_BI = BigInt.fromString('1');

export const BPS_BI = BigInt.fromString('10000');

export const ZERO_BD = BigDecimal.fromString('0');
export const ONE_BD = BigDecimal.fromString('1');

export const DEFAULT_DECIMALS = BigInt.fromString('18');
export const DECIMALS_6 = BigInt.fromString('6');

export const ERC20_INTERFACE_ID = Bytes.fromHexString('0x36372b07');

export const NATIVE = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
export const NATIVE_ALT = '0x0000000000000000000000000000000000000000';

export const CLARITY_MANAGER = '0xD8ddF4B409c0CE730c1BE601cF7839Bec9446CdB'.toLowerCase(); // replace this
export const CLARITY_HOOK = '0x3d19B632faD6Da763Ae6093CabBCA6bE75eB5013'.toLowerCase(); // replace this
export const DEFAULT_FEE_AMOUNT_BPS = BigDecimal.fromString('300');
export const BASE_BPS = BigDecimal.fromString('10000');

// V4 Math
export const Q192 = BigInt.fromI32(2).pow(192);

// Time
export const SECONDS_PER_MINUTE = 60;
export const SECONDS_PER_HOUR = SECONDS_PER_MINUTE * 60;
export const HOURS_PER_DAY = 24;
