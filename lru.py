class LRUcache:
    def __init__(self, capacity):
        self.capacity = capacity
        self.count = 0
        self.cache = {}
        self.lru ={}

if __name__ == "__main__":
    objct = LRUcache()

