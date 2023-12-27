function embraceEverything2<T extends string>(thing: T): T {
    return thing;
}

embraceEverything2<string>('hi');