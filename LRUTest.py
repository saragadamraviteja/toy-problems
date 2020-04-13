from lru_problem import LRUcache

class main:
    def __init__(self):
        self.cach = LRUcache(3)
        self.testcases()
    
    def testcases(self):
        self.cach.put(9)
        print(self.check([9]))
        self.cach.put(8)
        print(self.check([9,8]))
        self.cach.get(9)
        print(self.check([8,9]))
        self.cach.put(7)
        print(self.check([8,9,7]))

    def check(self, expected):
        result = self.cach.get_cache()
        # print(result)
        if (len(result) != len(expected)):
            return False
        for i,j in enumerate(expected):
            if(j != result[i]):
                return False
            return True
if __name__ =="__main__":
    main()