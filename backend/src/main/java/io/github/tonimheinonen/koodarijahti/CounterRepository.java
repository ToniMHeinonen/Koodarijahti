package io.github.tonimheinonen.koodarijahti;

import org.springframework.data.repository.CrudRepository;

public interface CounterRepository extends CrudRepository<Counter, Integer> {

}