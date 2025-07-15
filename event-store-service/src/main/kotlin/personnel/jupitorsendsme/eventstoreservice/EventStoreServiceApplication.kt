package personnel.jupitorsendsme.eventstoreservice

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class EventStoreServiceApplication

fun main(args: Array<String>) {
    runApplication<EventStoreServiceApplication>(*args)
}
