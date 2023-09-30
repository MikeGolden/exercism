class BufferFullException(BufferError):
    """Exception raised when CircularBuffer is full.

    message: explanation of the error.

    """
    def __init__(self, message):
        pass


class BufferEmptyException(BufferError):
    """Exception raised when CircularBuffer is empty.

    message: explanation of the error.

    """
    def __init__(self, message):
        pass


class CircularBuffer:
    def __init__(self, capacity):
        self.buffer = [None] * capacity
        self.read_index = 0
        self.write_index = 0

    def read(self):
        data = self.buffer[self.read_index]

        if not data:
            raise BufferEmptyException("Circular buffer is empty")

        self.buffer[self.read_index] = None
        self.read_index = (self.read_index + 1) % len(self.buffer)

        return data

    def write(self, data):
        if self.buffer[self.write_index]:
            raise BufferFullException("Circular buffer is full")

        self.buffer[self.write_index] = data
        self.write_index = (self.write_index + 1) % len(self.buffer)

    def overwrite(self, data):
        if self.buffer[self.write_index]:
            self.buffer[self.read_index] = data
            self.read_index = (self.read_index + 1) % len(self.buffer)
            self.write_index = self.read_index
        else:
            self.write(data)

    def clear(self):
        self.buffer = [None] * len(self.buffer)
        self.read_index = 0
        self.write_index = 0