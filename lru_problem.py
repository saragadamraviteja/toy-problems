class LRUcache:
    def __init__(self, capacity):
        self.capacity = capacity
        self.cache = []

    def put(self,additem):
        if len(self.cache) >= self.capacity:
            self.cache.pop(0)
        self.cache.append(additem)

    def get(self,getitem):
        popped = self.cache.pop(self.cache.index(getitem))
        # print(popped)
        self.cache.append(popped)
        # print(self.cache)
        return popped

    def get_cache(self):
        return self.cache


if __name__ == "__main__":
    LRUcache(input("enter size"))

